package com.tomx.plugins.wg;

import android.util.Log;

public class WireguardHelper {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
