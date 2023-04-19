package ec.edu.tecnologicoloja;
//author:ADX

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.app.Activity;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import java.io.FileNotFoundException;
import java.io.OutputStream;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    Button borrar, salvar,capturar;

    ImageView img_v;

    boolean control = true;

    int REQUEST_CODE_CAMERA= 200;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        borrar = findViewById(R.id.action_delete);
        salvar = findViewById(R.id.action_save);
        capturar = findViewById(R.id.btn1);

        img_v = findViewById(R.id.img);


        permisoCamara();

    }

    private void permisoCamara(){
        
    int permisoCamara = ContextCompat.checkSelfPermission(this,Manifest.permission.CAMERA);

        if(permisoCamara == PackageManager.PERMISSION_GRANTED){
            Toast.makeText(this, "Se usara la camara", Toast.LENGTH_SHORT).show();
        }else{
            requestPermissions(new String[]{Manifest.permission.CAMERA},REQUEST_CODE_CAMERA);
        }


    }

    public void permisoAlmacenamientoExterno(){
        int permisoAlmacenamineto = ContextCompat.checkSelfPermission(this,Manifest.permission.WRITE_EXTERNAL_STORAGE);

        if(permisoAlmacenamineto == PackageManager.PERMISSION_GRANTED){
            Toast.makeText(this, "Se guardara en almacenamiento externo", Toast.LENGTH_SHORT).show();
        }else{
            requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},REQUEST_CODE_CAMERA);
        }
    }

    private void dialogoEliminar() {
        AlertDialog.Builder builder = new AlertDialog.Builder ( MainActivity.this ) ;
        builder.setTitle ( "Alerta...!!" ) ;
        builder.setMessage ( " ¿Esta seguro de eliminar el archivo? " )
                .setPositiveButton ( " Si" , new DialogInterface.OnClickListener ( ) {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        img_v.setImageBitmap(null);
                        control=false;
                        Toast.makeText(getApplicationContext(), "Eliminando Archivo", Toast.LENGTH_SHORT).show();
                    }
                })
                .setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                }).show();
    }

    private void dialogoGuardar() {
        AlertDialog.Builder builder = new AlertDialog.Builder ( MainActivity.this ) ;
        builder.setTitle ( "Alerta...!!" ) ;
        builder.setMessage ( " ¿Esta seguro de Guardar el archivo? " )
                .setPositiveButton ( " Si" , new DialogInterface.OnClickListener ( ) {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        try {
                            Salvar();
                            Toast.makeText(getApplicationContext(), "Archivo Guardado Correctamente", Toast.LENGTH_SHORT).show();
                        } catch (FileNotFoundException e) {
                            e.printStackTrace();
                        }
                    }
                })
                .setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                }).show();
    }

    private void launchSystemCamera(){
        Intent thisPicktureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if(thisPicktureIntent.resolveActivity(getPackageManager())!= null){
            startActivityForResult(thisPicktureIntent,REQUEST_CODE_CAMERA);
        }else{
            Toast.makeText(this, getResources().getText(R.string.app_name), Toast.LENGTH_SHORT).show();
        }
    }

    protected void onActivityResult(int requestCode, int resultCode,Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(resultCode == Activity.RESULT_OK && requestCode == REQUEST_CODE_CAMERA){
            Bundle extras = data.getExtras();
            img_v.setImageBitmap((Bitmap)extras.get("data"));
            img_v.setVisibility(View.VISIBLE);
            control = true;
        }
    }


    public boolean onCreateOptionsMenu(Menu menu){
        getMenuInflater().inflate(R.menu.menu, menu);
        return true;
    }
    public boolean onOptionsItemSelected(MenuItem item){
        super.onOptionsItemSelected(item);
        switch (item.getItemId()){
            case R.id.action_delete:
                Toast.makeText(this, "Eliminando", Toast.LENGTH_SHORT).show();
                break;

            case R.id.action_save:
                Toast.makeText(this, "Imagen salvada", Toast.LENGTH_SHORT).show();
                break;
        }
        return true;
    }

    public void Salvar() throws FileNotFoundException {

        OutputStream fos = null ;

        ContentResolver resolver = getContentResolver();
        ContentValues values = new ContentValues ( ) ;
        String fileName = System.currentTimeMillis() + " imagen_pracrtica ";
        values.put ( MediaStore . Images.Media.DISPLAY_NAME ,fileName) ;
        values.put ( MediaStore . Images.Media.MIME_TYPE , " image / jpg " ) ;
        values.put ( MediaStore . Images.Media.RELATIVE_PATH , " Pictures / MyApp " ) ;
        values.put ( MediaStore.Images.Media.IS_PENDING , 1 ) ;
        Uri collection = MediaStore.Images.Media.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY) ;
        Uri imageuri = resolver.insert ( collection , values ) ;

        fos = resolver.openOutputStream(imageuri);

        values.clear ( ) ;
        values.put (MediaStore . Images.Media.IS_PENDING , 0 ) ;
        resolver.update ( imageuri , values , null ,  null ) ;
    }


    @Override
    public void onClick(View v) {
        if (v == borrar){
            dialogoEliminar();

        }
        if (v == salvar){
            permisoAlmacenamientoExterno();
            dialogoGuardar();

        }
        if (v == capturar){
            launchSystemCamera();
        }

    }
}