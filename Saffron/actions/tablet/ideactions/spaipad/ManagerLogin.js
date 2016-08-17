var loginManager = new LoginManager();

function LoginManager() {
    this.login = null;
    this.getLogin = function() {
        this.login = dao.request("Creds")
        return this.login
    };
    this.setLogin = function(data) {
        this.login = new Login(data);
    };
    this.setToken = function(token) {
        if (this.login == null) this.login = {};
        this.login.token = token;
    };
    this.validateLogin = function(callback) {
        var login = this.getLogin();
        var token = null;
        if (login) token = login.token
        if (token) {
            invokeAppService(SERV_VALIDATE, {
                "data": JSON.stringify({
                    "token": token
                })
            }, function(status, resultTable) {
                appscore.print.log("status :" + status);
                appscore.print.log("resultTable :" + JSON.stringify({
                    "data": resultTable
                }));
                if (resultTable["httpStatusCode"] == 200) {
                    var response = JSON.parse(resultTable["response"]);
                    appscore.print.log("token :" + response.data.token);
                    damageReportManager.reportTypes = response.report_types;
                } else if (resultTable["httpStatusCode"] == 401) {
                    appscore.print.log("no token")
                    loginManager.logout()
                } else {
                    appscore.print.error("there was an error")
                    loginManager.logout()
                }
                if (callback) callback();
            });
        } else {
            if (callback) callback();
        }
    };
    this.validateMember = function(callback) {
        invokeAppService(SERV_AUTHENTICATE, this.login, function(status, resultTable) {
            appscore.print.log("status :" + status);
            appscore.print.log("resultTable :" + JSON.stringify({
                "data": resultTable
            }));
            if (resultTable["httpStatusCode"] == 200) {
                var response = JSON.parse(resultTable["response"]);
                appscore.print.log("token :" + response.data.token);
                loginManager.login.token = response.data.token;
                damageReportManager.reportTypes = response.report_types;
                callback();
            } else if (resultTable["httpStatusCode"] == 401) {
                appscore.alert.error("Invalid Credentials", "Your login details are incorrect. Please Check your informations.");
            } else {
                appscore.alert.error("Error", "An error occured while connecting. Please try again.");
            }
        });
    };
    this.saveLogin = function() {
        if (this.login == null) {
            dao.remove("Creds")
        } else {
            dao.update("Creds", this.login)
        }
    };
    this.logout = function() {
        dao.remove("Creds");
        this.login = null;
    }
};