function HomePresenter(){
	this.segPromoBanner = null;
	this.flxSCFeaturedDeals = null;
  	this.homeManager = null;
  	
	this.reloadData = function(){
      this.flxSCFeaturedDeals.removeAll();
      var _fdeals = this.homeManager.featuredDeals;
      var _pdeals = utils.other.cleanJSONArray(this.homeManager.promoDeals).sort(utils.other.sortByProperty("sequence"));
      _pdeals = _pdeals.map(function(pdeals){ 
        	return this.build(pdeals); 
      },this);
      frmHome_addFeaturedDeals(this.flxSCFeaturedDeals, _fdeals.sort(utils.other.sortByProperty("sequence")));
      this.segPromoBanner.setData(_pdeals);
    };
  
  	this.build = function(pdeal){
		return {
				imgPromoBanner:pdeal.imgsrc
		}
	};
  
  	this.setHomeData = function(newHomeManager){
      this.homeManager = newHomeManager;
      this.reloadData();
    };
  
  	this.getLoginDetails = function(){
      	return {
          	"email" : this.txtEmail.text,
	        "password" : this.txtPassword.text
        };
    };
}