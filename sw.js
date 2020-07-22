importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if(workbox){
    console.log("workbox berhasil");
}else{
    console.log("workbox gagal");
}
//menyimpan caching
workbox.precaching.precacheAndRoute([
    {url:'/index.html',revision:'1'},
    {url:'/nav.html',revision:'1'},
    {url:'/css/materialize.min.css',revision:'1'},
    {url:'/js/materialize.min.js',revision:'1'},
    {url:'/js/script.js',revision:'1'}
]);
//berkas halaman dengan strategi stale while revalidate:

 workbox.routing.registerRoute(
    new RegExp('/pages/'),// cache all images in './pages/' directory
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pagesV1'
    })
  );