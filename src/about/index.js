import Layout from "../Layout";

export default function AboutPage(){
    return(
        <Layout>
        <div className="py-5 bg-[url('img/2.jpg')] text-center">
            個人網站-自我介紹<br/><br/>by邱海齊
        </div>
        <div className="py-20 bg-[url('img/8.jpg')] text-center">   
            關於我<br/><br/>
            姓名:邱海齊(Hai-Chi Chiou)<br/><br/>
            生日:2005/07/20(17歲)<br/><br/>
            就讀學校:<a href="https://www.nutc.edu.tw/bin/home.php">國立台中科技大學</a><br/><br/>
            就讀班級:資工三乙<br/><br/>
            目前學會的程式語言: Python Java C HTML PHP<br/><br/>
            近期目標:考到新竹國立大學<br/><br/>
            興趣:打球 吉他<br/><br/>
            缺點:缺乏美感<br/><br/>
            最喜歡的動物:<a href="https://zh.wikipedia.org/zh-tw/%E5%A4%A7%E7%86%8A%E7%8C%AB" > 熊貓 </a>
        </div>
        
         <div class="bg-indigo-300 ...">
            <img src={"https://image1.thenewslens.com/2019/1/hngap1amah79lx93z6y2uu7epdhy3z.jpg?auto=compress&h=90&q=80&w=150"} class="object-cover h-100 w-full ..."/>
        </div> 
        <div className="py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-center">
            <a href="https://github.com/Eason0720"> Github  </a>
            <a href="https://www.facebook.com/profile.php?id=100005411475071">  Facebook  </a>
            <a href="https://www.instagram.com/chiu_hai_chi/"> Instagram</a>

        </div>
        <div className="py-3 bg-[url('img/4.jpg')] text-center">        
            聯絡我
        </div>
        <div className="py-6 bg-[url('img/7.jpg')] text-center">  
            電話 : 0965437959<br/><br/>      
            Email : <a herf="easonhib@gmail.com">easonhib@gmail.com</a>
        </div>
        </Layout>
    )
}