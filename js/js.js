window.onload = function () {
  var app = new Vue({
    el:'#app',
    data:{
        name:[],
        images:[],
        email:"",
        qr_settings:{
          show_qr:false,
          qr_text: '',
          qr_size:300
        },
        links:[],
        title: '',
        str:'',
        autos:[],
        categories:[],
        selected_auto: 0,
        selected_troble: 0,
        message: "",
        error : false,
        ok:false,
        comment:"",
    },
    methods:{
        make_Arr(array){
            console.log(array)
            this.title = array.name
            document.title = this.title
            for(i = 0; i<array.length; i++){
              try{
                this.name.push(array[i].name)
                l = array[i]._links.self[0].href
                l = l.replace('https://turumi.ru/wp-json/wc/v3/','/')
                this.links.push(l)
              }catch{
                console.log(i)
              }
              // this.categories.push(array[i])
            }
        },
        show_QR_code(){
          this.qr_settings.show_qr=true;
          if(this.qr_settings.qr_text == ''){
            this.qr_settings.qr_text = 'Test'
          }
          this.str ='https://api.qrserver.com/v1/create-qr-code/?data='+this.qr_settings.qr_text+'&amp;size='+this.qr_settings.qr_size+'x'+this.qr_settings.qr_size;
        }
    },
    mounted(){
      //ПОЛУЧАЕМ ДОТУП К АПИ
      
      params = '&per_page=100'
      url = "https://turumi.ru/wp-json/wc/v3/"+path+"?consumer_key=ck_96d7f1ae710fdb25dbb3c7f5f069b97f43dae233&consumer_secret=cs_d68505ef6310ba15298089e1f3b3b34f3e216ff4"+params
      axios.get(url).then((response)=>{
          this.make_Arr(response.data)
      })
      r = 'products/categories/63'
      r = r.replace('products/categories/','')
      if(r != '')
        console.log(r)
    },
    computed:{
      sizeQrCode: function(){
        return{
          width: this.qr_settings.qr_size + 'px', 
        }
      }
    }
})
}