import Layout from "../Layout";

export default function AboutPage(){
    return(
        <Layout>
        <div className="py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-center">
            個人網站-自我介紹
        </div>
        <div className="py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-center">
            by邱海齊
        </div>
        <div className="py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-center">
            關於我
        </div>
        <div className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-center">        
            姓名:邱海齊(Hai-Chi Chiou)
        </div>
        <div className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-center">        
            生日:2005/07/20(17歲)
        </div>
        <div className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-center">        
            就讀學校:<a href="https://www.nutc.edu.tw/bin/home.php">國立台中科技大學</a> 
        </div>
        <div className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-center">        
            就讀班級:資工三乙
        </div>
        <div className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-center">        
            近期目標:考上清大
        </div>
        <div className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-center">        
            興趣:打球 吉他
        </div>
        <div className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-center">        
            喜歡的動物:<a href="https://zh.wikipedia.org/zh-tw/%E5%A4%A7%E7%86%8A%E7%8C%AB" > 熊貓 </a>
        </div>
         <div className="py-3 bg-[url('/img/httpsichef.bbci.co.uknews640cpsprodpb13663production_104495497_fc6f7f01-78ad-4d07-bba7-fcbbe5688375.jpg')] text-center">        
            喜歡的動物:<a href="https://zh.wikipedia.org/zh-tw/%E5%A4%A7%E7%86%8A%E7%8C%AB" > 熊貓 </a>
        </div> 
        

         <div class="bg-indigo-300 ...">
            <img src={"https://image1.thenewslens.com/2019/1/hngap1amah79lx93z6y2uu7epdhy3z.jpg?auto=compress&h=90&q=80&w=150"} class="object-cover h-100 w-full ..."/>
        </div> 
        <div className="py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center">
            <a href="https://github.com/Eason0720"> Github </a>
            <a href="https://www.facebook.com/profile.php?id=100005411475071"> Facebook </a>
            <a href="https://www.instagram.com/chiu_hai_chi/">Instagram</a>

        </div>
        <div className="py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center">        
            聯絡我
        </div>
        <div className="py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center">        
            電話:0965437959
        </div>
        <div className="py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center">        
            Email:<a herf="">easonhib@gmail.com</a>
        </div>
        </Layout>
    )
}