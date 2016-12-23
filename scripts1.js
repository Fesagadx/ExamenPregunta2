function ComentariosController($scope){
			$scope.comentarios=[
					{autor:"Ana Maria", email: "ana@gmail.com", contenido:"Para mi ese no es un evento importante :P ."},
					{autor:"Sagadx XD", email: "sagdx@hotmail.com", contenido:"Para mi el equipo que quedo en tercer lugar debio ganar :( ."}
					];
				
		
	

$scope.Save=function(){

$scope.comentarios.push({autor:$scope.nuevoComentario.autor, email:$scope.nuevoComentario.email, contenido:$scope.nuevoComentario.contenido});
$scope.formVisibility=false;
console.log($scope.formVisibility)
}

$scope.formVisibility=false;

$scope.ShowForm=function(){

	$scope.formVisibility=true;
	console.log($scope.formVisibility)
	
}
}


				
		
	

