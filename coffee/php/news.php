<?php
	$id=$_GET["id"];
	$conn=mysqli_connect("127.0.0.1","root","","h52002",3306);
	mysqli_query($conn,"SET NAMES utf8");
	if($id==-1){
		$sql="SELECT COUNT(*) FROM news;";
		$result=mysqli_query($conn,$sql);
		$row=mysqli_fetch_row($result);
		$num=$row[0];
		$num-=5;
		$sql="SELECT * FROM news LIMIT $num,5";
	//	
		$result=mysqli_query($conn,$sql);
	//	
		$arr=[];
		while(($row=mysqli_fetch_assoc($result))!=null){
			array_push($arr,$row);
		}
		echo JSON_encode($arr);
	}else{
		$sql="SELECT title,content FROM news WHERE id={$id};";
		$result=mysqli_query($conn,$sql);
		$arr=[];
		while(($row=mysqli_fetch_assoc($result))!=null){
			array_push($arr,$row);
		}
		echo JSON_encode($arr);
	}
	
?>