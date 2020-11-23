window.onload = function(){
    var app = new Vue({
        el: '#app',
        data: {
          message: 'Привет, Vue!'
        },
        mounted(){
            this.checkApi()
        },
        methods:{
            checkApi(){
                const options = {
                    method: 'GET',
                    url: 'https://turumi.ru/wp-json/wc/v3/products/categories',
                    headers: {
                      Authorization: 'OAuth oauth_consumer_key="ck_96d7f1ae710fdb25dbb3c7f5f069b97f43dae233", oauth_nonce="tootJXYnIVo7o9vNEchl9ixse3Zz44LS", oauth_signature="LDN%2Fj%2FCwRJbNe6sRyl0wxuKnZwU%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1606140998", oauth_version="1.0"'
                    }
                  };
                  axios.request(options).then(function (response) {
                    console.log(response.data);
                  }).catch(function (error) {
                    console.error(error);
                  })
            }
        }
      })
}