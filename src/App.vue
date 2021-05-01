<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    this.$router.push("/home");
  }
}

</script>

<style>
  :root {
    --violet:#B9B8D7;
    --darkViolet:#6260a6;
    --black:black;
    --white:white;
    --green:#509675;
  }

  @font-face {
  font-family: "Caviar Dreams";
  src: url("/assets/fonts/CaviarDreams.ttf") format("woff2"),
  }

  html,
  body,
  #app{
    height:100%;
    position:relative;
  }

  #app {
    font-family: Caviar Dreams;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .btn{
    background-color:var(--violet);
    color:var(--white);
    padding:10px 15px;
    font-weight:700;
    font-size:20px;
  }

  .btn:hover{
    background-color:var(--green);
    color:var(--white);
  }
  #QuantityMinus,
  #QuantityAdd{
    padding:3px 9px;
    border-radius:15px;
    background-color:var(--violet);
    color:var(--white);
    font-weight:900;
    font-size:20px;
    
  }
   #QuantityMinus:disabled,
  .btn:disabled{
    color:var(--white);
    background-color:#ccc;
  }
  .centerMiddle{
    top: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  a{
    color:var(--green);
    font-weight:700;
  }
  a:hover{
    color:var(--green);
    text-decoration:none;
  }
  .breadcrumb{
    background-color:rgba(185, 184, 215,0.3);
    border:0px;
    border-radius:0;
    color:var(--darkViolet);
  }
  .breadcrumb-item{
    color:var(--darkViolet);
  }
  a.breadcrumb-item:hover{
    color:var(--darkViolet);
    text-decoration:underline;
  }
  .card{
    border:0px;
    box-shadow:0 0 10px #ddd;
  }
  img.brand{
    width:50px;
  }
  .categoryLink{
  background-color:rgba(255,255,255,0.9);
  padding:20px;
  cursor:pointer;
  box-shadow:0 0 10px #aaa;
  font-size:1.2rem;
  }
  .categoryLink:hover{
    background-color:rgba(80, 150, 117,0.9);
    color:var(--white);
  }
  .categoryLink:hover a{
    color:var(--white);
  }
  #product h3{
    color:var(--darkViolet);
  }
  .icon{  
    height:25px;
  }


@media screen and (max-width: 950px){
  .card-title{
    font-size:15px;
  }
}
@media screen and (max-height: 500px){
  .middle{
    margin-top:100px;
  }

}
  
</style>
