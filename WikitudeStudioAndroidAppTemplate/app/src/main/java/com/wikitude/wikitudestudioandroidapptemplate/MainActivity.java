package com.wikitude.wikitudestudioandroidapptemplate;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;


public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    Button btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btn =  findViewById(R.id.btn1);

        btn.setOnClickListener(this::onClick);

    }

    public void onClick (View view){
        if (view == btn){
            Intent cambio  = new Intent(this,SampleCamActivity.class);
            startActivity(cambio);
        }
    }


}