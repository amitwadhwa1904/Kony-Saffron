package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.appscore.konydev.googleanalytics.GoogleAnalyticsManager;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_ganalytics extends JSLibrary {

 
	String[] methods = { };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new GAnalyticsLib();
 return libs;
 }



	public N_ganalytics(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "ganalytics";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 


class GAnalyticsLib extends JSLibrary {

 
 
	public static final String trackForm = "trackForm";
 
	String[] methods = { trackForm };

	public Object createInstance(final Object[] params) {
 return new com.appscore.konydev.googleanalytics.GoogleAnalyticsManager(
 (java.lang.String)params[0] );
 }


	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.String formName0 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 formName0 = (java.lang.String)params[0+inc];
 }
 ret = this.trackForm(params[0]
 ,formName0
 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "GAnalyticsLib";
	}

	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] trackForm( Object self ,java.lang.String inputKey0
 ){
 
		Object[] ret = null;
 ((com.appscore.konydev.googleanalytics.GoogleAnalyticsManager)self).trackForm( inputKey0
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
}

};
