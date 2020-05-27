<template>
  <div>
    <!-- tag -->
    <div class="nav">
      <ul>
        <li v-for="item in tagList" :key="item._id">
          <el-link type="info" :underline="false" :href='"/tag/"+item.name'>{{item.name}}</el-link>
        </li>
        <li>
          <el-link href="#">更多</el-link>  
        </li>     
      </ul>          
    </div>
    <el-row :gutter="10" style="height:300px">
      <el-col :span="16" style="height:300px">
        <el-card class="box-card" shadow="never" :body-style="boxcard">
          <div class="block">
            <el-carousel height="300px">
              <el-carousel-item v-for="item in imgUrl" :key="item">
                <img :src="item" alt="" height="300"/>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="never" style="max-height:300px;overflow:auto;">
          <div>
            <p v-for="item in newsList">
            <el-link style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div> 
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>新闻</span>
          </div>
          <div>
            <p v-for="item in xinwenList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix">
            <span>视频</span>
          </div>    
          <div>
            <p v-for="item in shipinList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>      
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix">
            <span>图片</span>
          </div>    
          <div>
            <p v-for="item in tupianList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>      
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>疫情</span>
          </div>
          <div>
            <p v-for="item in yiqingList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>军事</span>
          </div>
          <div>
            <p v-for="item in junshiList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>理财</span>
          </div>
          <div>
            <p v-for="item in licaiList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>数码</span>
          </div>
          <div>
            <p v-for="item in shumaList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>财经</span>
          </div>
          <div>
            <p v-for="item in caijingList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>科技</span>
          </div>
          <div>
            <p v-for="item in kejiList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>时尚</span>
          </div>
          <div>
            <p v-for="item in shishangList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="never" :body-style="boxcard">
          <div class="block">
        <span class="ad">广告</span>
            <el-carousel height="120px">
              <el-carousel-item v-for="item in ad" :key="item">
                <img :src="item" alt="" height="150"/>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-card>
      </el-col>     
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>汽车</span>
          </div>
          <div>
            <p v-for="item in qicheList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>房产</span>
          </div>
          <div>
            <p v-for="item in fangchanList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>教育</span>
          </div>
          <div>
            <p v-for="item in jiaoyuList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" style="height:150px;">
          <div slot="header" class="clearfix" style="padding:0px;">
            <span>文化</span>
          </div>
          <div>
            <p v-for="item in wenhuaList">
            <el-link :underline="false" style="font-size:12px" type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            </p>
          </div>
        </el-card>
      </el-col>            
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-carousel height="105px">
          <el-carousel-item v-for="item in longAd" :key="item">
            <img :src="item" alt="" height="105"/>
          </el-carousel-item>
        </el-carousel>       
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div >
        <section id="gallery-wrapper">
          <article class="white-panel" v-for="item in tushuoList" :key="item._id">
            <a :href='"/detail/"+item._id'><img :src='"http://127.0.0.1:3000/"+item.img' class="thumb"></a>
            <h1><a :href='"/detail/"+item._id'>{{item.title}}</a></h1>
              <p>{{item.content.substring(0,20)+"..."}}</p>
          </article>
        </section>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
@import "~@/assets/css/home/normalize.css";
@import "~@/assets/css/home/default.css";
/* @import "~@/assets/css/home/style.css"; */
		#gallery-wrapper {
		position: relative;
		/* max-width: 75%; */
		/* width: 75%; */
		margin:0px auto;
		}
		img.thumb {
		width: 100%;
		max-width: 100%;
		height: auto;
		}
		.white-panel {
		position: absolute;
		background: white;
		border-radius: 5px;
		box-shadow: 0px 1px 2px rgba(0,0,0,0.3);
		padding: 10px;
		}
		.white-panel h1 {
		font-size: 1em;
		}
		.white-panel h1 a {
		color: #A92733;
		}
		.white-panel:hover {
		box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
		margin-top: -5px;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-o-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
    }
    .nav{
      width: 100%;
      height: 50px;
    }
    li {
      list-style: none;
      display: inline-block;
        /* line-height: 30px; */
    }
    li .el-link{
      font-weight: 700;
      position: relative;
      display: block;
      overflow: hidden;
      transition: 0.7s all;
      padding: 14px 20px;
    }
    li .el-link:before{
      content: '';
      width: 40px;
      position: absolute;
      border-bottom: 5px solid #cccccc;
      bottom: 0;
      right: 350px;
      transition: 0.7s all;
    }
    li .el-link:hover:before{
      right: 0;
    }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-row{
    margin-top:5px;
  }
  p{
    margin-top:0px;
    margin-bottom:0px;
  }
.ad{
    position: relative;
    width: 50px;
    height: 25px;
    padding: 5px;
    background: white;
    opacity: 0.6;
    z-index: 10;
  }  
</style>
<style>
  .el-card__header{
    padding:0px;
  }
</style>

<script>
// @ is an alias to /src
import { getNewsList,getTagList,getNewsByTag } from '@/api/news'
import $ from 'jquery'
export default {
  name: 'Home',
  data(){
    return{
      imgUrl:[
        require("../assets/news_pic/carouel1.jpg"),
        require("../assets/news_pic/carouel2.jpg"),
        require("../assets/news_pic/carouel3.jpg"),
        require("../assets/news_pic/carouel4.jpg")
      ],
      boxcard:{
        padding:"0px",
      },
      longAd:[ 
        require("../assets/longad/longad1.png"),
        require("../assets/longad/longad2.png"),
        require("../assets/longad/longad3.png"),
      ],
      ad:[
        require("../assets/ad/ad1.jpg.webp"),
        require("../assets/ad/ad2.jpg.webp"),
        require("../assets/ad/ad3.jpg.webp"),
        require("../assets/ad/ad4.jpg.webp"),
      ],
      newsList:[],
      tagList:[],
      xinwenList:[],
      shipinList:[],
      tupianList:[],
      yiqingList:[],
      junshiList:[],
      licaiList:[],
      shumaList:[],
      caijingList:[],
      kejiList:[],
      shishangList:[],
      qicheList:[],
      fangchanList:[],
      jiaoyuList:[],
      wenhuaList:[],
      tushuoList:[]
    }
  },
  components: {

  },
  watch:{
      '$route' (to, from){
        console.log($route.fullPath)
        if(from=="/search"){
          console.log(from.path)
        }
        // this.init()
      }
  },  
  methods:{
    init(){
        $("#gallery-wrapper").pinterest_grid({
          no_columns: 4,
          padding_x: 10,
          padding_y: 10,
          margin_bottom: 50,
          single_column_breakpoint: 700
        });
        console.log("init..")
    }
  },
  created(){
    getNewsList().then((data)=>{
      let ls = data.data
      if(ls.length>=10){
        this.newsList = ls.slice(0,9)
        return
      }
      this.newsList = ls
    })
    getTagList().then((data)=>{
      this.tagList = data.data
    })
    getNewsByTag("新闻").then((res)=>{
      this.xinwenList = res.data
    })
    getNewsByTag("视频").then((res)=>{
      this.shipinList = res.data
    })
    getNewsByTag("图片").then((res)=>{
      this.tupianList = res.data
    }),
    getNewsByTag("疫情").then((res)=>{
      this.yiqingList = res.data
    }),
    getNewsByTag("军事").then((res)=>{
      this.junshiList = res.data
    }),
    getNewsByTag("理财").then((res)=>{
      this.licaiList = res.data
    }),
    getNewsByTag("数码").then((res)=>{
      this.shumaList = res.data
    }),
    getNewsByTag("财经").then((res)=>{
      this.caijingList = res.data
    }),
    getNewsByTag("科技").then((res)=>{
      this.kejiList = res.data
    }),
    getNewsByTag("时尚").then((res)=>{
      this.shishangList = res.data
    }),  
    getNewsByTag("汽车").then((res)=>{
      this.qicheList = res.data
    }), 
    getNewsByTag("房产").then((res)=>{
      this.fangchanList = res.data
    }), 
    getNewsByTag("教育").then((res)=>{
      this.jiaoyuList = res.data
    }), 
    getNewsByTag("文化").then((res)=>{
      this.wenhuaList = res.data
    }),
    getNewsByTag("图说").then((res)=>{
      this.tushuoList = res.data
    })                                       
  },
  mounted(){
   this.init()
  }
}

;(function ($, window, document, undefined) {
    var pluginName = 'pinterest_grid',
        defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 700
        },
        columns,
        $article,
        article_width;

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            resize_finish;

        $(window).resize(function() {
            clearTimeout(resize_finish);
            resize_finish = setTimeout( function () {
                self.make_layout_change(self);
            }, 11);
        });

        self.make_layout_change(self);

        setTimeout(function() {
            $(window).resize();
        }, 500);
    };

    Plugin.prototype.calculate = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
            $article = $(this.element).children();

        if(single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns;
        }

        $article.each(function() {
            $(this).css('width', article_width);
        });

        columns = self.options.no_columns;

        $article.each(function(index) {
            var current_column,
                left_out = 0,
                top = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if(single_column_mode === false) {
                current_column = (index % columns);
            } else {
                current_column = 0;
            }

            for(var t = 0; t < columns; t++) {
                $this.removeClass('c'+t);
            }

            if(index % columns === 0) {
                row++;
            }

            $this.addClass('c' + current_column);
            $this.addClass('r' + row);

            prevAll.each(function(index) {
                if($(this).hasClass('c' + current_column)) {
                    top += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if(single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = (index % columns) * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top' : top
            });
        });

        this.tallest($container);
        $(window).resize();
    };

    Plugin.prototype.tallest = function (_container) {
        var column_heights = [],
            largest = 0;

        for(var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c'+z).each(function() {
                temp_height += $(this).outerHeight();
            });
            column_heights[z] = temp_height;
        }

        largest = Math.max.apply(Math, column_heights);
        _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom));
    };

    Plugin.prototype.make_layout_change = function (_self) {
        if($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true);
        } else {
            _self.calculate(false);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

})($, window, document);    
</script>
