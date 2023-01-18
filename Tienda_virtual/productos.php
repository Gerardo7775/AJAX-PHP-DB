<?php

$conex = mysqli_connect('localhost', 'root', 'root', 'ajax');


$producto =$_POST['nombre'];
$consulta = "SELECT * FROM productos WHERE Nombre = '$producto'";
$resultado = mysqli_query($conex, $consulta);
if($resultado){
    while($datos = mysqli_fetch_assoc($resultado)){?>
        <!--tips: add .text-center,.text-right to the .card to change card text alignment-->
        <img src="data:png; base64, <?php echo base64_encode($datos['Imagen']); ?>" class="card-img-top" alt="<?php echo $datos['Nombre']; ?>">
        <div class="card-body">
            <h5 class="card-title"><?php echo $datos['Nombre']; ?></h5>
            <h6 class="card-subtitle mb-2 text-muted"><?php echo $datos['Marca']; ?></h6>
            <p class="card-text">Precio: $<?php echo $datos['Precio']; ?></p>
        </div>
    <?php }
}

?>