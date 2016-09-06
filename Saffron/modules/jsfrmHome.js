var homePresenter = null;

function frmHome_init(){
	appscore.print.start();
	homePresenter = new HomePresenter();
  	jsfrmHome_presenter_link();	
	appscore.print.stop();
}

function frmHome_setUI(){
  	header_setUI(frmHome);
}

function header_setUI(frmID){
  	appscore.print.start();
	if(loginManager.isLoggedIn){
      	frmID.headers[0].flxBoxLeft.onClick = toggleMenu1;
      	frmID.headers[0].imgLeft.isVisible = true;
      	frmID.headers[0].lblLoginTxt.isVisible = false;
    }  else {
      	frmID.headers[0].flxBoxLeft.onClick = showLoginForm;
      	frmID.headers[0].imgLeft.isVisible = false;
      	frmID.headers[0].lblLoginTxt.isVisible = true;      
    }
  	appscore.print.stop();
}

function showLoginForm(){
  	frmLogin.show();
}

function frmHome_preShow(){
	appscore.print.start();
  	frmHome_setUI();
	homeManager.loadHomeData(function(){
      	homePresenter.setHomeData(homeManager);	
    });
	appscore.print.stop();
}

function menu_setUI(frmID){
  	appscore.print.start();
  	if(menuVisibility){
      	hideMenu(frmID);
    } else {
      	kony.print("in else");
      	MenuVisible = false;
    }
  	appscore.print.stop();
}

function frmHome_postShow(){
	appscore.print.start();
  	hideMenu(frmHome);
	appscore.print.stop();
}

function frmHome_onLogout(){
  	loginManager.logout();
  	frmHome.show();
}

function toggleMenu1() {
  var currentForm = kony.application.getCurrentForm();
  if (menuVisibility) {
    hideMenu(currentForm);
  }  else{
   	showMenu(currentForm);  
  }
}

function showMenu(currentForm){
  	currentForm.MenuContainer.add(MenuForm.flxSideMenu);                                                           
    // Slide the menu into view
    currentForm.MenuContainer.animate(kony.ui.createAnimation(
      {"100":
        {"left":"0%",
          "stepConfig":{"timingFunction":kony.anim.EASE}}}),
        {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
        {"animationEnd" : function(){
        }
      });
    currentForm.flxCntrHome.animate(kony.ui.createAnimation(
      {"100":
        {"left":"82%",
          "stepConfig":{"timingFunction":kony.anim.EASE}}}),
        {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
        {"animationEnd" : function(){
        }
      });
  menuVisibility = true;
}

function hideMenu(frmID){
  	appscore.print.start();
    frmID.MenuContainer.animate(kony.ui.createAnimation(
      {"100":
        {"left":"-82%",
          "stepConfig":{"timingFunction":kony.anim.EASE}}}),
        {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
        {"animationEnd" : function(){
          frmID.MenuContainer.removeAll();
        }
      });
    frmID.flxCntrHome.animate(kony.ui.createAnimation(
      {"100":
        {"left":"0%",
          "stepConfig":{"timingFunction":kony.anim.EASE}}}),
        {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
        {"animationEnd" : function(){
        }
      });
  menuVisibility = false;
  	appscore.print.stop();
}




function jsfrmHome_presenter_link(){
  	homePresenter.flxSCFeaturedDeals = frmHome.flxSCFeaturedDeals;
  	homePresenter.segPromoBanner = frmHome.segPromoBanner;  
}




function frmHome_addFeaturedDeals(flxSCFeaturedDeals, featuredDeals) {
  	if(featuredDeals == null || featuredDeals.length == 0){ return; } else {
      for(var ii=0; ii<featuredDeals.length; ii++){
        	var _deal = featuredDeals[ii];
        	appscore.print.log("_deal==> " + JSON.stringify(_deal));
        	if(_deal==null || _deal==undefined || _deal=="undefined"){} else {
                var imageWidget = null;
              	var starImageWidget = null;
              	var buttonWidget = null;
                var richTxtWidget = null;
                var flexContainer1 = new kony.ui.FlexContainer({
                  "id": "flexContainer1",
                  "top": "0dp",
                  "left": "2%",
                  "width": "30%",
                  "height": "100%",
                  "zIndex": 1,
                  "isVisible": true,
                  "clipBounds": true,
                  "layoutType":1
                }, {
                  "padding": [0, 0, 0, 0]
                }, {});
                flexContainer1.setDefaultUnit(kony.flex.DP);
                imageWidget = addImage(_deal['imgsrc']);
                richTxtWidget = addRichText(_deal['dealName'], _deal['price']);
              	buttonWidget = addButtonWidget(_deal['id']);
                flexContainer1.add(imageWidget);
                flexContainer1.add(richTxtWidget);
              	if(_deal['flagged'] == 'Y'){
                  	starImageWidget = addStarImage('star.png');
                  	flexContainer1.add(starImageWidget);
                }
              	flexContainer1.add(buttonWidget);
                flxSCFeaturedDeals.add(flexContainer1);
            }
     	} 
	}
}

function addRichText(dealName, price){
  	var dealText = "<b>"+dealName+"</b> <br> Price : <b>"+price+"</b>";
	var rTextBasic={id:"rText", top:"80%", centerX:"50%", width:"100%", skin:"sknRichDeals", text:dealText, isVisible:true};
	var rTextLayout={paddingInPixel:true, contentAlignment:constants.CONTENT_ALIGN_TOP_CENTER, marginInPixel:true, hExpand:true, vExpand:false};
	var rTextPSP={};
	var rText = new kony.ui.RichText(rTextBasic, rTextLayout, rTextPSP);
  	return rText;
}

function addImage(imgsrc){
  	var basicConfImage ={id : "imageId", left:"0", top:"0", isVisible:true, height:"80%", width:"100%", src:imgsrc, imageWhenFailed:"rn_icon1.png", imageWhileDownloading:"konynew.png"};
	var layoutConfImage = {imageScaleMode:constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO, centerX:"50%"};
	var PSPConfImage = {};
	var imageId = new kony.ui.Image2(basicConfImage, layoutConfImage, PSPConfImage);
  	return imageId;
}

function addStarImage(imgsrc){
  	var basicConfImage ={id : "imageId", left:"80%", top:"0", isVisible:true, height:"17%", width:"20%", zIndex:"2",src:imgsrc, imageWhenFailed:"rn_icon1.png", imageWhileDownloading:"konynew.png"};
	var layoutConfImage = {imageScaleMode:constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO, centerX:"50%", zIndex:"2"};
	var PSPConfImage = {};
	var imageId = new kony.ui.Image2(basicConfImage, layoutConfImage, PSPConfImage);
  	return imageId;
}


function onDealClickCallBack(btn) {
  	appscore.print.start();
  	var _fdealid = btn.id.substring(3, btn.id.length);
	appscore.alert.info("Featured Deal Id", _fdealid);
}

function addButtonWidget(_ID){
	var btnBasic ={id:"btn"+_ID, left:"0", top:"0", height:"100%", width:"100%", isVisible:true, skin:"sknBtnTransparent", zIndex:"3", focusSkin:"sknBtnTransparent", text:"", onClick:onDealClickCallBack};
	var btnLayout ={containerWeight:100, padding:[0,0,0,0], margin:[0,0,0,0], hExpand:true, vExpand:false, displayText:true, zIndex:"3"};
	var btnPSP ={};
  	var Onbutton = new kony.ui.Button(btnBasic, btnLayout, btnPSP);
  	return Onbutton;
}