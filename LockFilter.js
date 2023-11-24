    <script defer='defer' fetchpriority='low'>
  //<![CDATA[
  var timeString=function(t){if(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(t)){var e=t,i=e.substring(0,4),n=e.substring(5,7),r=e.substring(8,10),o=new Array;return o[1]="Jan",o[2]="Feb",o[3]="Mar",o[4]="Apr",o[5]="May",o[6]="Jun",o[7]="Jul",o[8]="Aug",o[9]="Sep",o[10]="Oct",o[11]="Nov",o[12]="Dec",r+" "+o[parseInt(n,10)]+" "+i}return!1},imageString=function(t){var e=t.indexOf("<img"),i=t.indexOf('src="',e),n=t.indexOf('"',i+5),r=t.substr(i+5,n-i-5);return-1!=e&&-1!=i&&-1!=n&&""!=r?r:"https://1.bp.blogspot.com/-BYDJ1dpFEhE/X9QnAUfeORI/AAAAAAAAHxw/OjfaqiPHjhAmCgJts39XIg7o4KR-8YtdACNcBGAsYHQ/w300-h225-p-k-no-nu/dagruel-no-image.png"},mangaPost={mainItemArr:new Array,subItemArr:new Array,compile:function(t){var e=t.feed.entry;if(!e)return!1;var i=document.getElementById("myManga");if(!i)return!1;if(i.dataset.created="Dagruel",e.forEach(function({category:t,content:e,link:i,title:n,published:r,media$thumbnail:o}){var a=n.$t,s=t.map(function(t){return t.term}),u=i.find(function(t){if("alternate"===t.rel)return t}).href,c="function"==typeof timeAgo?timeAgo(new Date(r.$t)):timeString(r.$t),l=e.$t&&e.$t.length>0?e.$t:"Nothing",m=o?o.url.replace("s72","w175-rw-h235"):imageString(l);s=s.filter(function(t){if("Project"!==t&&!["Lock"].includes(t)) return t}),mangaPost.mainItem.filter(function(t){s.join(", ").includes(t)&&mangaPost.mainItemArr.push({title:a,link:u,image:m,category:s})}),mangaPost.subItem.filter(function(t){s.join(", ").includes(t)&&mangaPost.subItemArr.push({titleSub:a,linkSub:u,publishedSub:c,categorySub:s})})}),mangaPost.mainItemArr.length>0){var n="";mangaPost.mainItemArr.forEach(function({title:t,link:e,image:i,category:r}){var o="";

var lang = r.find(k => ["JP", "ID", "EN", "KR", "CN"].some(l => l == k)) || "";
if (lang) {
  lang = `<span class="${lang.toLowerCase()}">${lang}</span>`;
}

var extra = "";
var label = r.find(i => "New".includes(i));
if ("New" == label) {
  extra = "<span class='n'>New</span>";
}
else extra = "";


var typ = "";
var label2 = r.find(i => "Manga, Manhua, Manhwa, Novel, WN, LN, Doujin, Game".includes(i));
if ("Manga" == label2) {
  typ = "<span class='absolute rounded top-1 end-1 text-xs px-1.5 manga'>Manga</span>";
} else if ("Manhua" == label2) {
  typ = "<span class='absolute rounded top-1 end-1 text-xs px-1.5 manhua'>Manhua</span>";
} else if ("Novel" == label2) {
  typ = "<span class='absolute rounded top-1 end-1 text-xs px-1.5 novel'>Novel</span>";
} else if ("Manhwa" == label2) {
  typ = "<span class='absolute rounded top-1 end-1 text-xs px-1.5 manhwa'>Manhwa</span>";
} else if ("WN" == label2) {
  typ = "<span class='absolute rounded top-1 end-1 text-xs px-1.5 wn'>WN</span>";
} else if ("LN" == label2) {
  typ = "<span class='absolute rounded top-1 end-1 text-xs px-1.5 ln'>LN</span>";
} else if ("Doujin" == label2) {
  typ = "<span class='absolute rounded top-1 end-1 text-xs px-1.5 doujin'>Doujin</span>";
} else if ("Game" == label2) {
  typ = "<span class='absolute rounded top-1 end-1 text-xs px-1.5 doujin'>Game</span>";
} 
else typ = "";

var nsfw = "";
var label3 = r.find(i => "NSFW".includes(i));
if ("NSFW" == label3) {nsfw = "nsfw";} 
else nsfw = "";

console.log(`${label} & ${lang} & ${nsfw} & ${extra}`);
mangaPost.subItemArr.length>0&&mangaPost.subItemArr.forEach(function({titleSub:t,linkSub:e,publishedSub:i,categorySub:n}){var a=t;var episode = '';
var season = '';
var episodeRegex = /Ep(?:isode)? (\d+)/i;
var seasonRegex = /S(?:eason)? (\d+)/i;
var episodeMatch = a.match(episodeRegex);
var seasonMatch = a.match(seasonRegex);
if (episodeMatch) {episode = 'Eps ' + episodeMatch[1] + ' ';}if (seasonMatch) {season = 'S' + seasonMatch[1] + ' ';}mangaPost.settingTitle.forEach(function({name: e,news: i}) {ftl1 = t.split("Volume")[0],ftl2 = ftl1.split("Chapter")[0],a.includes(e) && (a = t.replace(ftl2, "").replace("Volume", "Vol").replace("Season", "S").replace("Chapter", "Ch").replace(/[^0-9]+$/g, "") + ' ' + (season || '') + (episode || ''));}),n.filter(function(n){r.join(", ").includes(n)&&(o+='<li class="char flex justify-between items-center rounded-lg mb-1 bg-slate-100 text-gray-700 dark:text-gray-400 dark:bg-gray-700 px-1 hover:text-accent duration-150 hover:bg-slate-200 hover:dark:bg-gray-900"></span><div class="chpName"><a href="'+e+'" title="'+t+'">'+a+'</a></div><time class="text-gray-400 text-xs">'+i+"</time></li>")})}),n+='<div class="bookItem flex bg-white dark:bg-gray-800 rounded-lg shadow '+nsfw+'"><a class="w-28 shrink-0 overflow-hidden" href="'+e+'" title="'+t+'"><div class="pb-[135%] relative overflow-hidden rounded-lg"><img class="absolute inset-0" alt="" loading="lazy" src="' + i + '"/>'+typ+'</div></a><div class="data px-3 py-1.5 grow"><div class="text-xs text-accent font-bold">'+lang+' / '+extra+'</div><h2 class="line-clamp-1"><a href="'+e+'" title="'+t+'">'+t+'</a></h2><ul class="subItem text-sm">'+o+"</ul></div></div>"}),i.innerHTML=n}},run:function(t,e){var i=document.createElement("script");i.src="/feeds/posts/default/-/"+t+"?orderby=published&alt=json-in-script&max-results="+e+"&callback=mangaPost.compile",document.body.appendChild(i)}};

  //Setting Script
  mangaPost.mainItem = ['Manga','Manhwa','Manhua','Novel','WN','LN','Doujin'];
  mangaPost.subItem = ['Chapter'];
  mangaPost.settingTitle = [{
    name: 'Chapter',
    news: 'Ch'
  }, {
    name: 'Volume',
    news: 'Vol'
  }];
  //]]>
</script>
