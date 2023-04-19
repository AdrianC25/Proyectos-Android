package ec.edu.tecnologicoloja.listapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;

import ec.edu.tecnologicoloja.listapplication.database.Persona;

public class Activity_info extends AppCompatActivity {

    private Persona objeto;
    private TextView nombre,apellido,direccion;
    private ImageView img;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_info);

        objeto = (Persona) getIntent().getSerializableExtra("id");

        nombre = findViewById(R.id.txtnombre);
        apellido = findViewById(R.id.txtapellido);
        direccion = findViewById(R.id.txtdireccion);
        img = findViewById(R.id.img1);

        nombre.setText(objeto.getNombre());
        apellido.setText(objeto.getApellido());
        direccion.setText(objeto.getDireccion());
        Glide.with(this).load("http://i.imgur.com/DvpvklR.png")
                .into(img);
    }
}