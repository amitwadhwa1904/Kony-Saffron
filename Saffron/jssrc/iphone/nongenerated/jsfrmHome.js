function frmHome_init() {
    appscore.print.start();
    appscore.print.stop();
}

function frmHome_preShow() {
    appscore.print.start();
    frmHome.headers[0].flxBoxLeft.isVisible = true;
    frmHome.headers[0].flxBoxLeft.onClick = toggleMenu1;
    frmHome.headers[0].lblHeader.text = HEADER_TITLE;
    frmHome.headers[0].flxBoxRight.onClick = frmHome_onLogout;
    appscore.print.stop();
}

function frmHome_postShow() {
    appscore.print.start();
    appscore.print.stop();
}

function frmHome_onLogout() {
    loginManager.logout();
    frmLogin.show();
}
var MenuVisible = false;

function toggleMenu1() {  
    MenuVisible = !MenuVisible;  
    var currentForm = kony.application.getCurrentForm();    
    if (MenuVisible)   {     // Slide the menu into view
            
        currentForm.MenuContainer.animate(kony.ui.createAnimation(      {
            "100":         {
                "left": "0%",
                          "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }),          {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.4
        },          {
            "animationEnd": function() {        }      
        });
        currentForm.flxCntrHome.animate(kony.ui.createAnimation(      {
            "100":         {
                "left": "82%",
                          "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }),          {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.4
        },          {
            "animationEnd": function() {        }      
        });  
    }  
    else   {     // Remove the menu and slide it out 
            
        currentForm.MenuContainer.animate(kony.ui.createAnimation(      {
            "100":         {
                "left": "-82%",
                          "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }),          {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.4
        },          {
            "animationEnd": function() {        }      
        });
        currentForm.flxCntrHome.animate(kony.ui.createAnimation(      {
            "100":         {
                "left": "0%",
                          "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }),          {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.4
        },          {
            "animationEnd": function() {        }      
        });  
    }
}