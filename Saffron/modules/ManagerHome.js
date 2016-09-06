var homeManager = new HomeManager();

function HomeManager(){
  	this.featuredDeals = [];
  	this.promoDeals = [];
  
  	this.loadHomeData = function(callback){
      	homeManager.loadFeaturedDeals(callback);
    };
  
    this.loadFeaturedDeals = function(callback){
		invokeHTTPService("GET", SERV_FEATURED_DEALS, {}, function(status, resultTable){
			appscore.print.start();
			appscore.print.log("resultTable=="+JSON.stringify({data:resultTable["main"]}) + " optstatus=="+resultTable["opstatus"]);
			if(resultTable["opstatus"].charAt(0) == "2"){ // HTTP Success Status code starts with 2
              		var _data = resultTable["main"];
					homeManager.featuredDeals = _data.map(function(result){
                      	return homeManager.buildFeaturedDeals(result);
                    });
					appscore.print.log("featuredDeals=="+JSON.stringify({data:homeManager.featuredDeals}) );
              		homeManager.loadPromoDeals(callback);
		     }else{
		 			appscore.print.error("errcode :" + resultTable["opstatus"] + " \n errmsg : " + resultTable["main"]);
		     }
		});
    };
  	this.buildFeaturedDeals = function(data){
		appscore.print.log("build=="+JSON.stringify(data));
      	if(data.active.toString() == 'Y'){
            return new FeaturedDeal({
              dealName:data.name.toString(),
              price:data.price.toString(),
              id:data.id.toString(),
              imgsrc:data.imgsrc.toString(),
              sequence:data.seq.toString(),
              flagged:data.flagged.toString(),
              active:data.active.toString()          
          	});
        }
	};
  
  
  	this.loadPromoDeals = function(callback){
      invokeHTTPService("GET", SERV_PROMO_DEALS, {}, function(status, resultTable){
			appscore.print.start();
			appscore.print.log("resultTable=="+JSON.stringify({data:resultTable["main"]}) + " optstatus=="+resultTable["opstatus"]);
			if(resultTable["opstatus"].charAt(0) == "2"){ // HTTP Success Status code starts with 2
              		var _data = resultTable["main"];
					homeManager.promoDeals = _data.map(function(result){
                      	return homeManager.buildPromoDeals(result);
                    });
					appscore.print.log("promoDeals=="+JSON.stringify({data:homeManager.promoDeals}) );
              		if(callback) callback();
		     }else{
		 			appscore.print.error("errcode :" + resultTable["opstatus"] + " \n errmsg : " + resultTable["main"]);
		     }
		});  
    };
  
  	this.buildPromoDeals = function(data){
		appscore.print.log("build=="+JSON.stringify(data));
      	if(data.active.toString() == 'Y'){
            return new FeaturedDeal({
              imgsrc:data.imgsrc.toString(),
              sequence:data.seq.toString(),
              flagged:data.flagged.toString(),
              active:data.active.toString()          
          	});
        }
	};
}