<?
$path = $_SERVER['REQUEST_URI'];
$path = trim($path, '/');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js" integrity="sha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==" crossorigin="anonymous"></script>
  <title>Document</title>
  <script>
    var path = '<?echo $path?>'
  </script>
  <script src="/js/js.js"></script>
  <link rel="stylesheet" href="/fa/css/font-awesome.min.css">
  <link rel="stylesheet" href="/style/main.css">
</head>
<body>
  <div id="app">
    <header>
      <ul>
        <div class="half_screen">
          <li id="logo">
            <img src="http://turumi.ru/wp-content/uploads/2018/01/LOGOX1.png" alt="">
          </li>
        </div>
        <div class="half_screen">
          <li><i class="fa fa-search" aria-hidden="true"></i> Найти товар</li>
          <li @click="show_QR_code"><i class="fa fa-qrcode" aria-hidden="true" ></i> Показать QR</li>
          <li><i class="fa fa-shopping-basket" aria-hidden="true"></i> Корзина</li>
        </div>
      </ul>
    </header>
    <a href="/products">products</a>
    <a href="/products/categories">categories</a>

    <div id="qr_place" v-if="qr_settings.show_qr">
      <div class="top_qr_close">
        <div class="btn_qr_place" @click="qr_settings.show_qr=false">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
      <div class="image_place_qr">
        <img :src="str" v-if="qr_settings.show_qr" v-bind:style="sizeQrCode"/>
      </div>
    </div>
    
    <div v-for="(i, nam) in name">
      <a :href="links[nam]">{{i}}</a>
    </div>
    <img :src="img" alt="">
  </div>
</body>
</html>
