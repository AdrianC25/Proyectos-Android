package ec.edu.tecnologicoloja.juego_dados;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;


import java.util.Random;

public class MainActivity extends AppCompatActivity {

    Button btn;
    ImageView img1 , img2;
    TextView txt1, txt2, txt3, txt4, txt5;

    final int[] dado1 = {R.drawable.dice_1, R.drawable.dice_2,R.drawable.dice_3,
            R.drawable.dice_4,R.drawable.dice_5,R.drawable.dice_6};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btn =  findViewById(R.id.btn1);
        img1 = findViewById(R.id.img1);
        img2 = findViewById(R.id.img2);
        txt1 = findViewById(R.id.txt1);
        txt2 = findViewById(R.id.text2);
        txt3 = findViewById(R.id.txt3);
        txt4 = findViewById(R.id.txt4);
        txt5 = findViewById(R.id.txt5);


        btn.setOnClickListener(this::onClick);

    }

    public void onClick (View view){
        if (view == btn){
            int a = aleatorio()+1;
            int b = aleatorio()+1;

            comprobar(a,b);

            img1.setImageResource(dado1[a-1]);
            img2.setImageResource(dado1[b-1]);
            Log.i(null, "onClick: un dado jug 1 = "+a);
            Log.i(null, "onClick: un dado jug 2 = "+b);



        }
    }

    public void comprobar(int a , int b){

            if (a == b){
                txt3.setBackgroundColor(Color.RED);
                txt4.setBackgroundColor(Color.RED);
                txt5.setText("EMPATE");
                txt5.setTextColor(Color.RED);
            } else if(a < b){
                txt3.setBackgroundColor(Color.RED);
                txt4.setBackgroundColor(Color.GREEN);
                txt5.setText("GANA JUGADOR 2");
                txt5.setTextColor(Color.GREEN);
            } else if(a > b){
                txt3.setBackgroundColor(Color.GREEN);
                txt4.setBackgroundColor(Color.RED);
                txt5.setText("GANA JUGADOR 1");
                txt5.setTextColor(Color.GREEN);
            }

    }
    public int aleatorio(){
        Random ran = new Random();
        int aleatorio = ran.nextInt(6);
        return aleatorio;
    }
}