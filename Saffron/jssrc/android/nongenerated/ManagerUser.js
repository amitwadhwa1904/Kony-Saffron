var userManager = new UserManager();

function UserManager() {
    this.userData = null;
    this.getUserData = function() {
        return this.userData;
    };
    this.setUserData = function(data) {
        this.userData = new UserData(data);
    };
    this.registerUser = function(callback) {
        invokeHTTPService("POST", SERV_REGISTER_USER, JSON.stringify(this.userData), function(status, resultTable) {
            appscore.print.log("status :" + status);
            appscore.print.log("resultTable :" + JSON.stringify({
                "data": resultTable
            }));
            if (resultTable["opstatus"].charAt(0) == "2") { // HTTP Success Status code starts with 2
                var response = resultTable["main"];
                appscore.print.log("result :" + response.result);
            } else {
                appscore.print.error("Error", "Token is expired.");
                loginManager.logout();
            }
            if (callback) callback();
        });
    };
    this.changePassword = function(callback) {};
    this.resetPassword = function(callback) {
        invokeHTTPService("POST", SERV_RESET_PWD, JSON.stringify(this.userData), function(status, resultTable) {
            appscore.print.log("status :" + status);
            appscore.print.log("resultTable :" + JSON.stringify({
                "data": resultTable
            }));
            if (resultTable["opstatus"].charAt(0) == "2") { // HTTP Success Status code starts with 2
                var response = resultTable["main"];
                appscore.print.log("result :" + response.result);
            } else {
                appscore.print.error("Error", "Token is expired.");
                loginManager.logout();
            }
            if (callback) callback();
        });
    };
    this.updateLoyalty = function(callback) {};
}