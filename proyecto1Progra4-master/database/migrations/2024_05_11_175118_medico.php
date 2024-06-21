<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
  
       /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('medico', function (Blueprint $table) {
            $table->id('idMedico'); // Utilizamos el método id() para definir la columna autoincremental y clave primaria
            $table->integer('numColegiado')->unique(); // Usamos unique() para hacer que esta columna sea única pero no autoincremental
            $table->string('cedula', 12);
            $table->text('nombre');
            $table->string('especialidad', 60);
            $table->string('telefono', max(0,12));
            $table->text('email');
           $table->string('contrasena', 255);
           $table->enum('TipoMedico', ['Corriente', 'Administrador'])->default('Corriente');
        });

        DB::table('medico')->insert([
            'numColegiado' => '1558',
            'cedula' => '2123',
            'nombre' => 'Kevin Salazar Bravo',
            'especialidad' => 'Oncologia',
            'telefono' => '123456789',
            'email' => 'kevin@example.com',
            'contrasena'=> '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4',
            'TipoMedico'=> 'Administrador'
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medico');
    }

};
