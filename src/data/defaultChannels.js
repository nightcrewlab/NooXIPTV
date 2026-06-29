// Varsayılan Türk kanalları listesi
// TV8 ve 360 TV en başta, sonrası popülerlik sırasına göre

export const DEFAULT_CHANNELS = [
  // --- ÖZEL BAŞLANGIÇ ---
  {
    name: "TV 8",
    group: "Genel",
    url: "https://tv8.daioncdn.net/tv8/tv8.m3u8?app=7ddc255a-ef47-4e81-ab14-c0e5f2949788&ce=3",
  },
  {
    name: "360 TV",
    group: "Haber",
    url: "https://turkmedya-live.ercdn.net/tv360/tv360.m3u8",
  },

  // --- ANA ULUSAL KANALLAR ---
  {
    name: "TRT 1",
    group: "Genel",
    url: "https://tv-trt1.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "Kanal D",
    group: "Genel",
    url: "https://demiroren.daioncdn.net/kanald/kanald.m3u8?app=kanald_web&ce=3",
  },
  {
    name: "ATV",
    group: "Genel",
    url: "http://89.187.191.41/ATV-HD-TR/video.m3u8",
  },
  {
    name: "Show TV",
    group: "Genel",
    url: "https://demiroren-live.daioncdn.net/showtv/showtv.m3u8",
  },
  {
    name: "Star TV",
    group: "Genel",
    url: "https://dogus-live.daioncdn.net/startv/startv.m3u8",
  },
  {
    name: "FOX TV",
    group: "Genel",
    url: "https://foxtv.daioncdn.net/foxtv/foxtv.m3u8",
  },
  {
    name: "Kanal 7",
    group: "Eğlence",
    url: "https://kanal7-live.daioncdn.net/kanal7/kanal7.m3u8",
  },
  {
    name: "NOW TV",
    group: "Eğlence",
    url: "https://uycyyuuzyh.turknet.ercdn.net/nphindgytw/nowtv/nowtv.m3u8",
  },
  {
    name: "Teve2",
    group: "Genel",
    url: "https://demiroren-live.daioncdn.net/teve2/teve2.m3u8",
  },
  {
    name: "NTV",
    group: "Haber",
    url: "https://dogus-live.daioncdn.net/ntv/ntv.m3u8",
  },
  {
    name: "CNN Türk",
    group: "Haber",
    url: "https://dogus-live.daioncdn.net/cnnturk/cnnturk.m3u8",
  },
  {
    name: "Habertürk TV",
    group: "Haber",
    url: "https://ciner-live.daioncdn.net/haberturktv/haberturktv.m3u8",
  },
  {
    name: "Halk TV",
    group: "Haber",
    url: "https://halktv-live.daioncdn.net/halktv/halktv.m3u8",
  },
  {
    name: "TRT Haber",
    group: "Haber",
    url: "https://tv-trthaber.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "TGRT Haber",
    group: "Haber",
    url: "https://canli.tgrthaber.com/tgrt.m3u8",
  },
  {
    name: "Haber Global",
    group: "Haber",
    url: "https://tv.ensonhaber.com/haberglobal/haberglobal.m3u8",
  },
  {
    name: "24 TV",
    group: "Haber",
    url: "https://mn-nl.mncdn.com/kanal24/smil:kanal24.smil/playlist.m3u8",
  },
  {
    name: "Akit TV",
    group: "Haber",
    url: "https://akittv-live.ercdn.net/akittv/akittv.m3u8",
  },
  {
    name: "Bloomberg HT",
    group: "İş/Ekonomi",
    url: "https://ciner.daioncdn.net/bloomberght/bloomberght.m3u8",
  },
  {
    name: "CNBC-e",
    group: "İş/Dizi",
    url: "https://hnpsechtsc.turknet.ercdn.net/xpnvudnlsv/cnbc-e/cnbc-e.m3u8",
  },
  {
    name: "TRT Spor",
    group: "Spor",
    url: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "TRT Spor Yıldız",
    group: "Spor",
    url: "https://tv-trtspor2.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "HTSpor TV",
    group: "Spor",
    url: "https://ciner.daioncdn.net/ht-spor/ht-spor.m3u8?app=web",
  },
  {
    name: "S Sport",
    group: "Spor",
    url: "https://bcovlive-a.akamaihd.net/540fcb034b144b848e7ff887f61a293a/eu-central-1/6415845530001/profile_0/chunklist.m3u8",
  },
  {
    name: "S Sport 2",
    group: "Spor",
    url: "https://bcovlive-a.akamaihd.net/29c60f23ea4840ba8726925a77fcfd0b/eu-central-1/6415845530001/profile_0/chunklist.m3u8",
  },
  {
    name: "FB TV",
    group: "Spor",
    url: "http://1hskrdto.rocketcdn.com/fenerbahcetv.smil/playlist.m3u8",
  },
  {
    name: "TJK TV",
    group: "Spor",
    url: "https://tjktv-live.tjk.org/tjktv.m3u8",
  },
  {
    name: "TJK TV 2",
    group: "Spor",
    url: "https://tjktv-live.tjk.org/tjktv2/tjktv2.m3u8",
  },
  {
    name: "Sports TV",
    group: "Spor",
    url: "https://live.sportstv.com.tr/hls/low/sportstv.m3u8",
  },
  {
    name: "Tabii Spor 6",
    group: "Spor",
    url: "https://vbtob9hyq58eiophct5qctxr2.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "KRAL Pop TV",
    group: "Müzik",
    url: "https://dogus-live.daioncdn.net/kralpoptv/playlist.m3u8",
  },
  {
    name: "Power TV",
    group: "Müzik",
    url: "https://livetv.powerapp.com.tr/powerTV/powerhd.smil/playlist.m3u8",
  },
  {
    name: "Power Turk",
    group: "Müzik",
    url: "https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/playlist.m3u8",
  },
  {
    name: "Power Türk Slow",
    group: "Müzik",
    url: "https://livetv.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8",
  },
  {
    name: "Power Türk Akustik",
    group: "Müzik",
    url: "https://livetv.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8",
  },
  {
    name: "Power Türk Taptaze",
    group: "Müzik",
    url: "https://livetv.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8",
  },
  {
    name: "Power Dance",
    group: "Müzik",
    url: "https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8",
  },
  {
    name: "Power Love",
    group: "Müzik",
    url: "https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8",
  },
  {
    name: "TRT Müzik",
    group: "Müzik",
    url: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "Dream Türk",
    group: "Müzik",
    url: "https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8",
  },
  {
    name: "Number 1 TV",
    group: "Müzik",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8",
  },
  {
    name: "Number 1 Türk",
    group: "Müzik",
    url: "https://mn-nl.mncdn.com/blutv_nr1turk2/live.m3u8",
  },
  {
    name: "Number 1 Damar",
    group: "Müzik",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8",
  },
  {
    name: "Number 1 Ask",
    group: "Müzik",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e18f9cea15_1/playlist.m3u8",
  },
  {
    name: "Number 1 Dance",
    group: "Müzik",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8",
  },
  {
    name: "Med Muzik",
    group: "Müzik",
    url: "http://54.36.110.140/live3/live3.m3u8",
  },
  {
    name: "TRT Çocuk",
    group: "Çocuk",
    url: "https://tv-trtcocuk.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "Minika Çocuk",
    group: "Çocuk",
    url: "https://tgn.bozztv.com/dvrfl05/gin-minikacocuk/index.m3u8",
  },
  {
    name: "Minika Go",
    group: "Çocuk",
    url: "https://tgn.bozztv.com/dvrfl05/gin-minikago/index.m3u8",
  },
  {
    name: "TRT Diyanet Çocuk",
    group: "Çocuk",
    url: "https://tv-trtdiyanetcocuk.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "BabyTV Türkiye",
    group: "Çocuk",
    url: "https://saran-live.ercdn.net/babytv/index.m3u8",
  },
  {
    name: "TRT Belgesel",
    group: "Belgesel",
    url: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "GZT",
    group: "Belgesel",
    url: "https://mn-nl.mncdn.com/gzttv/gzttv/playlist.m3u8",
  },
  {
    name: "TGRT Belgesel TV",
    group: "Belgesel",
    url: "https://tv.ensonhaber.com/tv/tr/tgrtbelgesel/index.m3u8",
  },
  {
    name: "Diyanet TV",
    group: "Dini",
    url: "https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3bf95a47e07.smil/playlist.m3u8",
  },
  {
    name: "Dost TV",
    group: "Dini",
    url: "https://dost.stream.emsal.im/tv/live.m3u8",
  },
  {
    name: "Lalegul TV",
    group: "Dini",
    url: "https://lbl.netmedya.net/hls/lalegultv.m3u8",
  },
  {
    name: "Diyar TV",
    group: "Dini",
    url: "https://live.artidijitalmedya.com/artidijital_diyartv/diyartv/playlist.m3u8",
  },
  {
    name: "TRT EBA İlkokul",
    group: "Eğitim",
    url: "https://tv-e-okul00.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "TRT EBA Ortaokul",
    group: "Eğitim",
    url: "https://tv-e-okul01.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "TRT EBA Lise",
    group: "Eğitim",
    url: "https://tv-e-okul02.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "Tele 1",
    group: "Genel",
    url: "https://tele1-live.ercdn.net/tele1/tele1.m3u8",
  },
  {
    name: "TV 100",
    group: "Genel",
    url: "https://tv100-live.daioncdn.net/tv100/tv100.m3u8",
  },
  {
    name: "Beyaz TV",
    group: "Genel",
    url: "https://beyaztv.daioncdn.net/beyaztv/beyaztv.m3u8?app=fcd5c66b-da9d-44ba-a410-4f34805c397d&ce=3",
  },
  {
    name: "Flash TV",
    group: "Genel",
    url: "https://mn-nl.mncdn.com/blutv_flashtv/live.m3u8",
  },
  {
    name: "Ülke TV",
    group: "Genel",
    url: "https://mn-nl.mncdn.com/blutv_ulketv2/live.m3u8",
  },
  {
    name: "TRT 3",
    group: "Genel",
    url: "https://tv-trt3.live.trt.com.tr/master.m3u8",
  },
  {
    name: "TRT Avaz",
    group: "Genel",
    url: "https://tv-trtavaz.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "TRT Türk",
    group: "Genel",
    url: "https://tv-trtturk.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "TRT Kürdî",
    group: "Genel",
    url: "https://tv-trtkurdi.medya.trt.com.tr/master.m3u8",
  },
  {
    name: "TV4",
    group: "Genel",
    url: "https://turkmedya-live.ercdn.net/tv4/tv4.m3u8",
  },
  {
    name: "Euro D",
    group: "Genel",
    url: "https://live.duhnet.tv/S2/HLS_LIVE/eurodnp/playlist.m3u8",
  },
  {
    name: "EuroStar TV",
    group: "Eğlence",
    url: "https://canlitvulusal.xyz/live/eurostar/index.m3u8",
  },
  {
    name: "Kanal Hayat",
    group: "Genel",
    url: "https://tbn02a.ltnschedule.com/hls/nx21i.m3u8",
  },
  {
    name: "Meltem TV",
    group: "Genel",
    url: "https://vhxyrsly.rocketcdn.com/meltemtv/playlist.m3u8",
  },
  {
    name: "TBMM TV",
    group: "Genel",
    url: "https://meclistv-live.ercdn.net/meclistv/meclistv.m3u8",
  },
  {
    name: "IBB TV",
    group: "Genel",
    url: "https://npserver1.ibb.gov.tr/webtv/webtv_wowza1/playlist.m3u8",
  },
  {
    name: "GRT",
    group: "Genel",
    url: "https://live.artidijitalmedya.com/artidijital_grt/grt1/playlist.m3u8",
  },
  {
    name: "Benguturk TV",
    group: "Genel",
    url: "http://185.234.111.229:8000/play/a05u",
  },
  {
    name: "4U TV",
    group: "Eğlence",
    url: "https://hls.4utv.live/hls/stream.m3u8",
  },
  {
    name: "Edessa TV",
    group: "Eğlence",
    url: "https://canli.edessatv.com/hls/stream.m3u8",
  },
  {
    name: "Milyon TV",
    group: "Eğlence",
    url: "https://sosyoapp-live.cdnnew.com/sosyo/buraya-bir-isim-verin.m3u8",
  },
  {
    name: "Woman TV",
    group: "Yaşam",
    url: "https://embedlp.becdn.net/womantv.m3u8",
  },
  {
    name: "Fortuna TV",
    group: "Yaşam",
    url: "https://edge1.socialsmart.tv/ftvturk/bant1/playlist.m3u8",
  },
  {
    name: "FilmBox",
    group: "Film",
    url: "http://315e5a5d.ottrast.com/iptv/MM4E93NGF5LADZ/6948/index.m3u8",
  },
  {
    name: "MovieSmart Türk",
    group: "Film",
    url: "http://playhdnewjj.xyz:8080/recc121412/KVqfhtdJ2nQ7/174",
  },
  {
    name: "TVnet",
    group: "Genel",
    url: "https://mn-nl.mncdn.com/tvnet/tvnet/playlist.m3u8",
  },
  {
    name: "Bizimev TV",
    group: "Genel",
    url: "https://mn-nl.mncdn.com/blutv_bizimev/bizimev_sd.smil/playlist.m3u8",
  },
  {
    name: "Bir TV",
    group: "Genel",
    url: "https://live.artidijitalmedya.com/artidijital_birtv/birtv/playlist.m3u8",
  },
  {
    name: "DHA",
    group: "Haber",
    url: "https://603c568fccdf5.streamlock.net/live/dhaweb1_C5efC/playlist.m3u8",
  },
  {
    name: "AA Live",
    group: "Haber",
    url: "https://mtulqxgomrllive.mediatriple.net/mtulqxgomrllive/broadcast_59f9c0c785b88.smil/playlist.m3u8",
  },
  {
    name: "Finans Türk TV",
    group: "Haber",
    url: "https://yayin30.haber100.com/live/finansturk/playlist.m3u8",
  },
  {
    name: "TürkHaber",
    group: "Haber",
    url: "https://edge1.socialsmart.tv/turkhaber/bant1/playlist.m3u8",
  },
  {
    name: "Kanal 34",
    group: "Genel",
    url: "https://5be5d840359c6.streamlock.net/kanal34tv/kanal34tv/playlist.m3u8",
  },
  {
    name: "Kanal 7 Avrupa",
    group: "Eğlence",
    url: "https://livetv.radyotvonline.net/kanal7live/kanal7avr/playlist.m3u8",
  },
  {
    name: "ATV Avrupa",
    group: "Genel",
    url: "https://streamer2.nexgen.bz/ATV/index.m3u8",
  },
  {
    name: "Kanal Avrupa",
    group: "Genel",
    url: "http://51.15.2.151/hls/kanalavrupa.m3u8",
  },
  {
    name: "Kanal 3",
    group: "Genel",
    url: "https://live.artidijitalmedya.com/artidijital_kanal3/kanal3/playlist.m3u8",
  },
  {
    name: "Kanal 12",
    group: "Genel",
    url: "https://live.artidijitalmedya.com/artidijital_kanal12/kanal12/playlist.m3u8",
  },
  {
    name: "Kanal 32",
    group: "Genel",
    url: "https://edge1.socialsmart.tv/kanal32/bant1/playlist.m3u8",
  },
  {
    name: "TV 1",
    group: "Genel",
    url: "https://edge1.socialsmart.tv/tv1/bant1/playlist.m3u8",
  },
  {
    name: "Tarih TV",
    group: "Genel",
    url: "https://tv1.arectv30.sbs/live/tarihtv.m3u8",
  },
  {
    name: "Tarım TV",
    group: "Genel",
    url: "https://content.tvkur.com/l/c7e1da7mm25p552d9u9g/master.m3u8",
  },
  {
    name: "Sat7 Türk",
    group: "Genel",
    url: "https://live.artidijitalmedya.com/artidijital_sat7turk/sat7turk/playlist.m3u8",
  },
  {
    name: "Semerkand TV",
    group: "Dini",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtisvwurbfcyslive/broadcast_58d915bd40efc.smil/playlist.m3u8",
  },
  {
    name: "Zarok TV",
    group: "Genel",
    url: "https://zindikurmanci.zaroktv.com.tr/hls/stream.m3u8",
  },
];

export const GROUP_ORDER = [
  "Genel",
  "Haber",
  "Spor",
  "Eğlence",
  "Müzik",
  "Çocuk",
  "Belgesel",
  "Film",
  "Dini",
  "Eğitim",
  "İş/Ekonomi",
  "İş/Dizi",
  "Yaşam",
];