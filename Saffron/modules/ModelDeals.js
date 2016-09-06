function FeaturedDeal(featuredDeal){
  	this.dealName = "";
  	this.price = ""; 
  	this.id = "";
  	this.imgsrc = ""; 
   	this.sequence = "";
  	this.flagged = ""; 
   	this.activeDeal = "";
  
	if (featuredDeal != null) {
		utils.object.setValues(this, featuredDeal);
	}  
}


function PromoDeal(promoDeal){
  	this.imgsrc = ""; 
   	this.sequence = "";
  	this.flagged = ""; 
   	this.activeDeal = "";
  
	if (promoDeal != null) {
		utils.object.setValues(this, promoDeal);
	}  
}