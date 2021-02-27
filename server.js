var dbd = require("dbd.js");

var bot = new dbd.Bot({
  token: process.env.BOT_TOKEN,
  prefix: "$getServerVar[prefix]"
});

bot.onMessage();

bot.command({
  name: "ping",
  code: `Pong! \`$ping\``
});

bot.command({
  name: "rps",
  code: `$argsCheck[1;❌ You must select either Rock, either Paper or either Scissors.]
$onlyIf[$checkCondition[$toLowercase[$message[1]]==rock]-$checkCondition[$toLowercase[$message[1]]==paper]-$checkCondition[$toLowercase[$message[1]]==scissors]!=false-false-false;❌ You must select either Rock, either Paper or either Scissors.]
$title[RPS‏]
$description[You chose $replaceText[$replaceText[$replaceText[$toLowercase[$message[1]];rock;Rock;1];paper;Paper;1];scissors;Scissors;1], the bot has chosen $randomText[Rock;Paper;Scissors].
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$message[1]]-$randomText[Rock;Paper;Scissors];rock-Scissors;You Won
;1];paper-Rock;You Won.;1];scissors-Paper;You Won.;1];rock-Paper;You Lost.;1];paper-Scissors;You Lost.;1];scissors-Rock;You Lost.;1];rock-Rock;It's a Tie!;1];scissors-Scissors;It's a Tie!;1];paper-Paper;It's a Tie!;1]]
$color[#ff2053]`
});

bot.status({
  text: "s.help",
  type: "PLAYING",
  time: 300
});

bot.status({
  text: "$serverCount servers",
  type: "WATCHING",
  time: 300
});

bot.command({
  name: "roulette",
  code: `$onlyIf[$checkContains[$toLowercase[$message[2]];red;black]==true;Please pick a side, either **red** or **black**]

$onlyIf[$message[1]<=$getUserVar[money];You don't have enough money! **$message[1]**]

$argsCheck[>1; Please Put a price and a side, red or black! and If you don't understand it type s.helproulette]

$authorIcon[$authorAvatar]
$author[$username#$discriminator[$authorID]]
$description[$username bet on $**$message[1]** and picked **$message[2]**]
$footer[Hold on for 25s!]
$color[ff354]`
});

bot.command({
  name: "roulettle",
  code: `$replyIn[25s]
$suppressErrors

$setUserVar[money;$$randomText[sum;sub][$getUserVar[money];$message[1]]]

$title[$replaceText[$replaceText[$randomText[sum;sub];sum; WINNER;1];sub; Unfortunately $username lost.;1]]

$description[ball $replaceText[$replaceText[$randomText[sum;sub];sum; draw;1];sub; draw;1] $replaceText[$replaceText[$randomText[sum;sub];sum;on: **$message[2]**;1];sub;on: **$randomText[red;black]**;1]

$replaceText[$replaceText[$randomText[sum;sub];sum; <@$authorID> $username won: $$message[1];1];sub;<@$authorID> you lost: $$message[1];1]]
$footer[$username#$discriminator[$authorID]]
$footerIcon[$userAvatar[$authorID]]
$color[$replaceText[$replaceText[$randomText[sum;sub];sum;1bbe00;1];sub;eb0000;1]]

$onlyIf[$checkContains[$toLowercase[$message[2]];red;black]==true;]

$onlyIf[$message[1]<=$getUserVar[money];]

$argsCheck[>1;]`
});

bot.command({
  name: "helproulettle",
  code: `$title[HELP IN ROULETTE!]
$description[In this game the player bet on the particular money the player has to choose the colour red or black there is also a spin if the arrow stopes in your selected color that means you win. The beginner start with $500 and slowly increase there money.]
$footer[I HOPE THAT YOU UNDERSTAND!]
$color[#ff2052]
$botTyping`
});

bot.command({
  name: "guide",
  code: `$title[GUIDE]
$description[Wanna to learn how to create and code a discord bot on Android with Bot designer for discord?
Then download this file and learn
Download link [Click Here](https://www.dropbox.com/s/caniq99sxmen9rr/Guide%20For%20HTCACADBOAWBDFD.doc?dl=0) or [Click Here](https://cdn.discordapp.com/attachments/798154805699805234/800274401320894474/Guide_For_HTCACADBOAWBDFD.doc)]
$color[#ff2052]
$footer[THANKS FOR READING!]`
});

bot.command({
  name: "JALLOGS guide",
  code: `$title[GUIDE FOR HTMWALLWBDFD]
$description[Wanna to learn how to make welcome and leave logs with BDFD?
Download this file and learn
Download link [Click Here](https://www.dropbox.com/s/88l9rgm9e0bxz39/Guide%20for%20HTMWALLWBDFD.doc?dl=0) or [Click Here](https://cdn.discordapp.com/attachments/798154805699805234/800273753682214932/Guide_for_HTMWALLWBDFD.doc)
Note: Remember to learn the Main Guide. For Main Guide type s.guide]`
});

bot.command({
  name: "hug",
  code: `$color[FF0000]
$onlyIf[$authorID!=$mentioned[1];**❌ You Can't Hug yourself**]$description[**$username** hug to **$username[$findUser[mention]**]]
$image[$randomText[https://cdn.discordapp.com/attachments/444228566775889931/621881987292201000/SJZ-Qy35f.gif;https://images-ext-2.discordapp.net/external/2hgnKZQiZpy4oDNeBgUjEaAsk9OnPHepQyKTZmXM0w8/https/cdn.weeb.sh/images/Sk2gmRZZG.gif;https://images-ext-1.discordapp.net/external/K6PI2Xh0O1dtAHrxtn0migKbiP7oE-DsNRWTwRGtDW8/https/cdn.weeb.sh/images/rkIK_u7Pb.gif;https://images-ext-2.discordapp.net/external/JgepkMoJmEXEPqZ-fV7zr3_IzsqBIqucrkJDyLczSFs/https/cdn.weeb.sh/images/S1a0DJhqG.gif;https://images-ext-2.discordapp.net/external/cTULtnQjpJp6IfggCB0EUBBs8uClIIly3XS4vYYGGFo/https/cdn.discordapp.com/attachments/399448944889036801/586592026536181786/hug_13.gif;https://cdn.discordapp.com/attachments/621751782485393412/621876638975787009/giphy.gif;https://images-ext-2.discordapp.net/external/asQYdZOJY9aqQE7sjCyhQqq89yzvxNyzx2fGaK_AvSA/https/cdn.weeb.sh/images/H1SfI8XwW.gif;https://images-ext-1.discordapp.net/external/RZTr3T4mdgJtcY3q1LIplds03o9b123e2V7SQP_CLxk/https/cdn.weeb.sh/images/B1SzeshCW.gif;https://i.some-random-api.ml/$randomText[zSKMG85bIg.gif;SifsjuLIpk;A1U7DNY3gk;dPLEGVVbIS;lhaXyQGREZ;KFLpKFvCS1;GxDcJMiyra;xuDnvZuy9q;N1DxPsC3o1;eM56DKbh89;z8Bzas60Of;xuDnvZuy9q;N1DxPsC3o1;52EStsWOxD;lhaXyQGREZ;ozeHK135ai;yHtuPwr40i;eM56DKbh89;4lsHtTeodH;IdojZs5m1v;N1DxPsC3o1;z8Bzas60Of;s3iX4IeTRw;zSKMG85bIg].gif]]`
});

bot.command({
  name: "pat",
  code: `$argsCheck[>1; Please Mention Someone]
$onlyIf[$guildID!=;This command is disabled in DMs, Please use it somewhere else.]
$onlyIf[$message!=;]
$onlyIf[$authorID!=$mentioned[1];**❌ You Can't Pat yourself**]
$onlyIf[$userExists[$mentioned[1]]==true;This user does not exist, Please mention a user that exists]

$color[$randomText[dcc5ff;9efffa;cbffc0;ffcdf4;ffe5d3;ffffb3]]
$description[**<@$authorID> pats <@$mentioned[1]> on the head!**]
$image[$randomText[https://media1.tenor.com/images/68c98c4b89cf159d410c8f1bd5b7c124/tenor.gif;https://media1.tenor.com/images/16ec668d63ac6c1e8a1635b855cb1654/tenor.gif;https://media1.tenor.com/images/54722063c802bac30d928db3bf3cc3b4/tenor.gif;https://media1.tenor.com/images/76f574af72542be9e30fbffec02339b3/tenor.gif?itemid=13570956;https://media1.tenor.com/images/57e98242606d651cc992b9525d3de2d8/tenor.gif?itemid=17549072;https://media1.tenor.com/images/078599227bc087959b79ea111fbc0f3a/tenor.gif?itemid=13596135;https://cdn.discordapp.com/attachments/708671684491739199/708672410475560970/ko9MR4Q5E3y.gif?size=2048;https://cdn.discordapp.com/attachments/708671684491739199/708672413545660507/LR8lKzjm1Eo.gif?size=2048;https://cdn.discordapp.com/attachments/708671684491739199/708672400631267368/63EVshtRzG1.gif?size=2048;748310506934239284/755087993823297536/tenor-1.gif?size=2048;https://cdn.discordapp.com/attachments/758055465400926362/758532816035905536/IeBMrEGZ.gif?https://cdn.nekos.life/v3/sfw/gif/pat/pat_047.gif?https://media.discordapp.net/attachments/399448944889036801/688911115224088606/e94e56da-cdca-43e2-beea-d1b07a4c0a29.gif?https://media.discordapp.net/attachments/399448944889036801/698947645972021338/32f2e5fc-c0c1-4d75-a78e-2a5afa163d98.gif?https://media.discordapp.net/attachments/399448944889036801/722409482742792283/8ea8c63a-6c36-4c68-865c-2c1ab86eebcc.gif?size=2048;https://purrbot.site/img/sfw/pat/gif/pat_0$random[01;80].gif]]`
});

bot.command({
  name: "kiss",
  code: `$​color[#ff2053]
$title[Kiss]
$​description[**$​username** Kiss **<@$​mentioned[<]>**]
$image[$randomText[https://cdn.discordapp.com/attachments/572486432384352268/633970015900794880/5bca76823067b273a1108261103bf740tenor.gif;https://cdn.discordapp.com/attachments/572486432384352268/633970037694398484/6d75a30fab19a9751aae652dd211dd1cgiphy.gif;https://cdn.discordapp.com/attachments/572486432384352268/633970030513750017/80f94c90afd9f524c1b2e3cca20f1a45tenor_1.gif;https://cdn.discordapp.com/attachments/572486432384352268/633970023962247178/631c72f1880142f58089bdc695a27da4giphy_1.gif;https://cdn.discordapp.com/attachments/572486432384352268/633970030513750017/80f94c90afd9f524c1b2e3cca20f1a45tenor_1.gif;https://tenor.com/view/anime-kiss-love-sweet-gif-5095865;https://tenor.com/view/kiss-me-%D0%BB%D1%8E%D0%B1%D0%BB%D1%8E-anime-kiss-intimate-gif-17382422;https://tenor.com/view/anime-forehead-kiss-gif-12392648;https://tenor.com/view/kiss-anime-cute-kawaii-gif-13843260;https://tenor.com/view/love-cheek-peck-kiss-anime-gif-17382412;https://tenor.com/view/anime-kiss-gif-4829336;https://tenor.com/view/cute-kawai-kiss-anime-gif-16371489]]
$footerIcon[$authorAvatar]
$footer[Request by $username]`
});

bot.command({
  name: "blush",
  code: `$description[$randomText[**$username is blushing cute**;**$username's face is Red as Tomato**]]
$image[$randomText[https://i.gifer.com/7Ago.gif;https://i.gifer.com/Pkog.gif;https://i.gifer.com/8xtr.gif;https://i.gifer.com/J6EH.gif;https://i.gifer.com/FKtx.gif;https://i.gifer.com/Azxk.gif;https://i.gifer.com/ADu5.gif;https://i.gifer.com/3Jdq.gif]]`
});

bot.command({
  name: "meme",
  code: `$deletecommand
$image[$randomText[https://i.imgflip.com/31gy6j.jpg;http://memeville.weebly.com/uploads/1/7/5/6/17560407/6884621_orig.jpg;http://memeville.weebly.com/uploads/1/7/5/6/17560407/1710179.jpg;http://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/summer_orig.png;http://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/summer_orig.png;http://myriamsmemeoftheday.weebly.com/uploads/7/7/8/8/77889656/img-0166_orig.gif;http://myriamsmemeoftheday.weebly.com/uploads/7/7/8/8/77889656/img-0171_1.gif;https://imgflip.com/i/31k7kk;https://cdn.weeb.sh/images/B1VVWuaFf.jpeg;https://images.app.goo.gl/njyqD6L2dJ1m3qX19;https://images.app.goo.gl/WLLbBKmbWZwsFLqh7;]]`
});

bot.command({
  name: "pussy",
  code: `$onlyNSFW[❌This command can only be used in the NSFW channel]
$description[**Here Some Pussy From Me**]
$image[$randomText[https://171gifs.com/wp-content/uploads/2017/06/Gif-Lesbian-pussy-licking-with-hip-rolling.gif;https://171gifs.com/wp-content/uploads/2013/10/Johnny-Castle-licks-Dana-Vespolis-hairy-pussy.gif;https://171gifs.com/wp-content/uploads/2013/08/Tyler-Nixon-licking-Mikki7-Lynn-pink-pussy.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-Pussy-Licking-Cunnilingus-Oral-Sex-Gif.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-Hot-Facesitting-and-Pussy-Licking-GIF.gif;https://171gifs.com/wp-content/uploads/2013/09/Dani-Daniels-licking-Remy-LaCroix-pussy.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-Repin-and-follow-for-more-pussy-licking-lesbian-gifs.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-Pussy-Licking-Porn-GIFs.gif;https://171gifs.com/wp-content/uploads/2017/02/Peta-Jensen-Flixxx-Please-Come-Fuck-Me-05-pussy-licking.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-Pussy-licking-gif-eating-lips.gif;https://171gifs.com/wp-content/uploads/2017/02/Dillion-Harper-licking-shaved-pussy-on-the-shower.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-Pussy-licking-gif-pink-vagina.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-The-Best-Pussy-Licking-Porn-GIFs.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-Cunnilingus-Eating-Pussy-Licking-MILF-Lingerie-GIF.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-Pussy-Licking-Female-POV-loseup-Porn-Gif.gif;https://171gifs.com/wp-content/uploads/2013/10/Aaliyah-Love-fucked-licking-Cherie-Deville-pussy.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-Busty-Pussy-Licking-krissy-lynn.gif;https://171gifs.com/wp-content/uploads/2017/06/Gif-Facesitting-Cunnilingus-Pussy-Licking-Porn-Gif.gif]]
$color[#fffff]
$cooldown[3s; Please Wait %time%]
$footer[Requested by $username#$discriminator[$authorID]]`
});

bot.command({
  name: "porn",
  code: `$onlyNSFW[❌This command can only be used in the NSFW channel]
$description[**Here Some Porn From Me**]
$image[$randomText[https://images.sex.com/images/pinporn/2019/09/17/460/21830444.gif;https://images.sex.com/images/pinporn/2019/09/19/460/21836573.gif;http://porngif.cz/gif/zadky/0151.gif;http://porngif.cz/gif/ze%20predu/0198.gif;http://porngif.cz/gif/ze%20zadu/0596.gif;http://porngif.cz/gif/ze%20predu/0278.gif;http:/ /porngif.cz/gif/na%20konicka/0029.gif;http://porngif.cz/gif/na%20konicka/0176.gif;http://porngif.cz/gif/ze%20predu/0065.gif;http://porngif.cz/gif/ze%20zadu/0490.gif;http://porngif.cz/gif/na%20konicka/0237.gif;http://porngif.cz/gif/ze%20zadu/0276.gif;http://porngif.cz/gif/na%20konicka/0361.gif;http://porngif.cz/gif/na%20konicka/0205.gif;http://porngif.cz/gif/na%20konicka/0301.gif;http://porngif.cz/gif/ze%20zadu/0336.gif;http://porngif.cz/gif/ze%20zadu/0423.gif;http://porngif.cz/gif/strikani/0120.gif;http://porngif.cz/gif/strikani/0343.gif;http://porngif.cz/gif/strikani/0283.gif;http://porngif.cz/gif/ze%20zadu/0079.gif;http://porngif.cz/gif/ze%20zadu/0550.gif;http://porngif.cz/gif/ze%20predu/0342.gif;http://porngif.cz/gif/ze%20zadu/0511.gif;http://porngif.cz/gif/ze%20predu/0072.gif;http://porngif.cz/gif/ze%20predu/0136.gif;http://porngif.cz/gif/ze%20zadu/0168.gif;http://porngif.cz/gif/strikani/0150.gif;http://porngif.cz/gif/na%20konicka/0278.gif;http://porngif.cz/gif/ze%20zadu/0533.gif;http://porngif.cz/gif/strikani/0190.gif;http://porngif.cz/gif/na%20konicka/0212.gif;http://porngif.cz/gif/ze%20zadu/0471.gif;http://porngif.cz/gif/na%20konicka/0001.gif;http://porngif.cz/gif/ze%20predu/0477.gif;http://porngif.cz/gif/na%20konicka/0293.gif;http://porngif.cz/gif/strikani/0147.gif;http://porngif.cz/gif/ze%20zadu/0442.gif]]
$color[$random[0;999999]]
$footer[Requested by $username#$discriminator[$authorID]]
$cooldown[3s; Please Wait %time%] `
});

bot.command({
  name: "ass",
  code: `$color[ff0000]
$onlyNSFW[❌This command can only be used in the NSFW channel]
$description[**Here Some Ass From Me**]
$image[$randomText[https://cdn.boob.bot/ass/4FBF.JPG;https://cdn.boob.bot/ass/4CE0.JPG;https://cdn.boob.bot/ass/4ECF.JPG;https://cdn.boob.bot/ass/4C83.JPG;https://cdn.boob.bot/ass/4E48.JPG;https://cdn.boob.bot/ass/4CB0.JPG;https://cdn.boob.bot/ass/4EC0.JPG;https://cdn.boob.bot/ass/50BE.JPG;https://cdn.boob.bot/ass/4CE0.JPG;https://cdn.boob.bot/ass/50A0.JPG;https://cdn.boob.bot/ass/4C95.JPG;https://cdn.boob.bot/ass/4D94.JPG;https://cdn.boob.bot/ass/50A0.JPG;https://cdn.boob.bot/ass/4E1B.JPG;https://cdn.boob.bot/ass/4DFD.JPG;https://cdn.boob.bot/ass/4D67.JPG;https://cdn.boob.bot/ass/4EDE.JPG;https://cdn.boob.bot/ass/4C95.JPG;https://cdn.boob.bot/ass/4FDD.JPG;https://cdn.boob.bot/ass/4FB0.JPG;https://cdn.boob.bot/ass/5073.JPG;https://cdn.boob.bot/ass/4C74.JPG;https://cdn.boob.bot/ass/4CE0.JPG;https://cdn.boob.bot/ass/4ECF.JPG;https://cdn.boob.bot/ass/4DDF.JPG;https://cdn.boob.bot/ass/4DA3.JPG;https://cdn.boob.bot/ass/4DB2.GIF;https://cdn.boob.bot/ass/4C83.JPG;https://cdn.boob.bot/ass/4C95.JPG;https://cdn.boob.bot/ass/4D3A.JPG;https://cdn.boob.bot/ass/4C95.JPG;https://cdn.boob.bot/ass/4EFC.JPG;https://cdn.boob.bot/ass/4FFB.JPG;https://cdn.boob.bot/ass/4DC1.JPG;https://cdn.boob.bot/ass/4E48.JPG;https://cdn.boob.bot/ass/50FA.JPG;https://cdn.boob.bot/ass/5028.JPG;https://cdn.boob.bot/ass/50A0.JPG;https://cdn.boob.bot/ass/5136.JPG;https://cdn.boob.bot/ass/4EFC.JPG;https://cdn.boob.bot/ass/50DC.JPG;https://cdn.boob.bot/ass/4FA1.JPG;https://cdn.boob.bot/ass/500A.JPG;https://cdn.boob.bot/ass/4C68.JPG;https://cdn.boob.bot/ass/5064.JPG;https://cdn.boob.bot/ass/4C92.JPG;https://cdn.boob.bot/ass/4F0B.JPG;https://cdn.boob.bot/ass/4EC0.JPG;https://cdn.boob.bot/ass/5037.JPG;https://cdn.boob.bot/ass/4C77.JPG;https://cdn.boob.bot/ass/5091.JPG]]
$footer[Requested by $username#$discriminator[$authorID]]
$color[0adcc5]
$cooldown[3s;Please Wait %time%.]`
});

bot.command({
  name: "boob",
  code: `$color[ff0000]
$description[**Here Some Boobs From Me**]
$onlyNSFW[❌This command can only be used in the NSFW channel]
$image[$randomText[https://cdn.boob.bot/boobs/800123D5.png;https://cdn.boob.bot/boobs/4D1C.JPG;https://cdn.boob.bot/boobs/800001D0.jpg;https://cdn.boob.bot/boobs/4DDF.JPG;https://cdn.boob.bot/boobs/8000179C.jpg;https://cdn.boob.bot/boobs/4E48.JPG;https://cdn.boob.bot/boobs/8000CA39.gif;https://cdn.boob.bot/boobs/8000B80F.gif;https://cdn.boob.bot/boobs/8000A072.gif;https://cdn.boob.bot/boobs/80003A1F.gif;https://cdn.boob.bot/boobs/800071D3.gif;https://cdn.boob.bot/boobs/8000306F.gif;https://cdn.boob.bot/boobs/8000538D.gif;https://cdn.boob.bot/boobs/800063E6.gif;https://cdn.boob.bot/boobs/800154E0.png;https://cdn.boob.bot/boobs/80002589.gif;https://cdn.boob.bot/boobs/80012777.png;https://cdn.boob.bot/boobs/800007DE.jpg;https://cdn.boob.bot/boobs/80000306.jpg;https://cdn.boob.bot/boobs/80011BF6.jpg;https://cdn.boob.bot/boobs/8000D17D.gif;https://cdn.boob.bot/boobs/80001B3E.jpg;https://cdn.boob.bot/boobs/800148C4.jpg;https://cdn.boob.bot/boobs/80011AC0.jpg;https://cdn.boob.bot/boobs/4DA3.JPG;https://cdn.boob.bot/boobs/8000D3E9.gif;https://cdn.boob.bot/boobs/800106C5.gif;https://cdn.boob.bot/boobs/80007138.gif;https://cdn.boob.bot/boobs/80010A67.gif;https://cdn.boob.bot/boobs/4D49.JPG;https://cdn.boob.bot/boobs/800063E6.gif;https://cdn.boob.bot/boobs/8000ABF3.gif;https://cdn.boob.bot/boobs/80000D51.gif;https://cdn.boob.bot/boobs/8000B508.gif;https://cdn.boob.bot/boobs/8000A243.gif;https://cdn.boob.bot/boobs/8001001C.gif;https://cdn.boob.bot/boobs/800085CE.gif;https://cdn.boob.bot/boobs/8000992E.gif;https://cdn.boob.bot/boobs/80008F7E.gif;https://cdn.boob.bot/boobs/80009EA1.gif;https://cdn.boob.bot/boobs/80014351.jpg;https://cdn.boob.bot/boobs/80016368.jpg;https://cdn.boob.bot/boobs/800040C8.gif;https://cdn.boob.bot/boobs/80003240.gif]]
$footer[Requested by $username#$discriminator[$authorID]]
$cooldown[3s;Please Wait %time%.]`
});

bot.command({
  name: "smile",
  code: `$color[$random[0;99999]]
$description[$randomText[<@$authorID> puts a big smile!;$username smile;$username smile like a $randomText[angel;devil]]]
$image[$randomText[https://media.tenor.com/images/d62e090630ff6829fda329b86ea723e0/tenor.gif;https://media.tenor.com/images/f4273baaa0b2493f1c4b2d4ed32aaa9c/tenor.gif;https://media.tenor.com/images/4ea5a1f32764091f5c433bf0b1c778d1/tenor.gif;https://media.tenor.com/images/7cb5e535bcade89f2979cd3dd3bfde5a/tenor.gif;https://media.tenor.com/images/1a30a0af6eeed4c9a0e33a233158d885/tenor.gif]]`
});

bot.command({
  name: "wave",
  code: `$title[**$username Makes a wave**]
$image[$randomText[https://cdn.discordapp.com/attachments/811553917191716877/811941952929005600/tenor_8.gif;https://cdn.discordapp.com/attachments/811553917191716877/811941953477541888/tenor_7.gifhttps://cdn.discordapp.com/attachments/811553917191716877/811941954119139338/tenor_6.gif;https://cdn.discordapp.com/attachments/811553917191716877/811941954556264458/tenor_5.gif;https://cdn.discordapp.com/attachments/811553917191716877/811941954845540372/tenor_4.gif;https://cdn.discordapp.com/attachments/811553917191716877/811941955361308682/tenor_3.gif;https://cdn.discordapp.com/attachments/811553917191716877/811941956245651546/tenor_2.gif;https://cdn.discordapp.com/attachments/811553917191716877/811941956678582343/tenor_1.gif;https://cdn.discordapp.com/attachments/811553917191716877/811941957025923072/tenor.gif]]
$addTimestamp
$color[$random[0;99999]]`
});

bot.joinCommand({
  channel: "$getServerVar[welcome]",
  code: `$image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.
webp;.png;1]?size=2048&middle=Welcome&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[We are now $membersCount members; ;%20;-1]&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
$suppressErrors`
});
bot.onJoined();

bot.leaveCommand({
  channel: "$getServerVar[goodbye]",
  code: `$image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]?size=2048&middle=Goodbye&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[Now we are $membersCount members; ;%20;-1]&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
$suppressErrors`
});
bot.onLeave();

bot.command({
  name: "setwelcome",
  code: `$setServerVar[welcome;$mentionedChannels[1;yes]]
$description[The channel <#$mentionedChannels[1]> was setted as welcome channel, i will welcome the new users in that channel]
$footer[Setted by $username[$authorID]#$discriminator[$authorID]]
$onlyPerms[manageserver;You need manage server permissions to set this!]
$color[fffff1]
$addTimestamp`
});

bot.command({
  name: "setleave",
  code: `$setServerVar[goodbye;$mentionedChannels[1;yes]]
$description[The channel <#$mentionedChannels[1]> was setted as goodbye channel, i will say goodbye in that channel to the users that leave]
$footer[Setted by $username[$authorID]#$discriminator[$authorID]]
$onlyPerms[manageserver;You need manage server permissions to set this!]
$color[fffff1]
$addTimestamp`
});

bot.command({
  name: "setrank",
  usage: "setrank <channel>",
  description: "settings the levelup channel",
  code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;$mentionedChannels[1;yes]]
$setServerVar[rsystem;1]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
});

bot.command({
  name: "resetrank",
  usage: "resetrank",
  description: "reset the levelup channel",
  code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
});

bot.command({
  name: "$alwaysExecute",
  code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]`
});

bot.command({
  name: "$alwaysExecute",
  code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[10;40]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
});

bot.awaitedCommand({
  name: "errorrank",
  code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
});

bot.command({
  name: "setrankmsg",
  usage: "setrankmsg <message>",
  description: "message for the leveled up",
  code: `$description[You have been setted the message to:
\`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;You can also use this variables:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Current msg is:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
});

bot.command({
  name: "rank",
  aliases: ["level"],
  usage: "rank (user)",
  description: "see the current level and exp",
  code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}]
$cooldown[5s;]`
});

bot.variables({
  prefix: "s.",
  rch: "",
  rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
  lvl: "0",
  exp: "0",
  rexp: "200",
  rsystem: "0",
  bank: "0",
  case: "",
  warns: "0",
  welcome: "",
  goodbye: "",
  prefix: "s.",
  money: "500",
  bw: "False",
  search: ""
});

bot.command({
  name: "anime",

  description: "Search anime info via title",

  usage: "anime <anime title>",

  code: `

$title[$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.titles.romaji;] / $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.titles.japanese;] ]

$description[

📅 Published\`\`\`

$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.startDate;] - $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.endDate;]\`\`\`

📖 Episode\`\`\`

$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.episodeCount;] Episode\`\`\`

⭐ Rating\`\`\`

$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.averageRating;]\`\`\`

🏆 Popularity Rank\`\`\`

$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.popularityRank;]\`\`\`

📜 Synopsis\`\`\`

$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.synopsis;]\`\`\`

]

$color[RANDOM]

$image[$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.posterImage.medium;]]

$footer[Requested By $username[$authorID];$authorAvatar]

$addTimestamp

$onlyIf[$message[1]!=;You need to put Anime name]

`
});

bot.command({
  name: "covid19",
  code: `$title[Covid On $message]

$image[https://covid-img.herokuapp.com/country/$toLowercase[$message]]

$color[$random[111111;999999]]

$footer[Covid Stats ]

$addTimestamp`
});

bot.command({
  name: "warn",
  code: `$setUserVar[warns;$sum[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]

$onlyPerms[manageroles;manageserver;managemessages;kick;ban;admin;❌ - No Permissons to run this command] 

$deletecommand

$botTyping

$color[FFFFFF] 

$onlyPerms[manageroles;manageserver;managemessages;kick;ban;admin;❌ - No Permissons to run this command] 

$author[$username#$discriminator[$authorID]] 

$authorIcon[$authorAvatar] 

$title[⚠️ - Warning]

$addField[Warned User;<@$mentioned[1]> with ID: $mentioned[1]]

$addField[Warned By;<@$authorID> with ID: $authorID]

$addField[Reason;$noMentionMessage]

$footerIcon[$userAvatar[$mentioned[1]]]

$footer[Warned User: $username[$mentioned[1]]#$discriminator[$mentioned[1]] | Case #$sum[$getServerVar[case];1]]`
});

bot.command({
  name: "checkwarn",
  code: `$color[#FF0000]

$title[Warn Check]

$description[This user has $getUserVar[warns;$mentioned[1]] warns]`
});

bot.command({
  name: "muted",
  code: `$mute[muted]

$title[MUTE]

$description[<@$mentioned[<]> Is muted by $username] 

$footer[Muted by $username]

$argsCheck[>1;Please mention someone]

$onlyPerms[manageroles;You cannot use this command]`
});

bot.command({
  name: "unmuted",
  code: `$unmute[muted]

$title[UNMUTE]

$description[<@$mentioned[<]> is unmuted by $username]

$footer[Unmuted by $username]

$argsCheck[>1;Please mention user]

$onlyPerms[manageroles;You cannot use this command]`
});

bot.command({
  name: "kick",
  code: `$kickMention

$title[KICK]

$color[#ff2052]

$description[$username[$mentioned[<]] Is kicked by $username]

$footer[Kicked by $username]

$argsCheck[>1;Please mention someone]

$onlyPerms[kick;You cannot use this command]`
});

bot.command({
  name: "ban",
  code: `$ban

$title[BAN]

$color[#ff2052]

$description[<$mentioned[<]> Banned from the server!]

$footer[Banned by <$authorID>]

$argsCheck[>1;Please type ID]

$onlyPerms[ban;You cannot use the command]`
});

bot.command({
  name: "unban",
  code: `$unban

$onlyAdmin[You need a higher role to execute that.]

$description[User has been unbanned.]

$deleteIn[5s]

$deletecommand`
});

bot.command({
  name: "work",
  code: `$setUserVar[money;$sum[$getUserVar[money;$authorID];$random[200;3000]];$authorID]
$color[08b763]
$footer[\`s.balance\` to check your current balance]
$description[You worked as a $randomText[employ; co-worker;worker; carpenter] and got :dollar: $random[200;3000] money!]
$author[$username;$authorAvatar]
$cooldown[2hr;Please wait for %time% before trying to work again.]`
});

bot.command({
  name: "withdraw",
  aliases: ["with"],
  code: `$setUserVar[bank;$sub[$getUserVar[bank;$authorID];$message];$authorID]
$setUserVar[money;$sum[$getUserVar[money;$authorID];$message];$authorID]
$description[You withdrew :dollar: $message from your :bank: bank]
$author[$username;$authorAvatar]
$suppressErrors[Not a valid number!]
$onlyIf[$message<=$getUserVar[money;$authorID];That amount is higher than the amount in your bank!]
$onlyIf[$message>0;You cannot withdraw an amount lower than \`0\`. If you want to withdraw all, then use the command s.with-all]`
});

bot.command({
  name: "deposit",
  aliases: ["dep"],
  code: `
$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$message];$authorID]
$setUserVar[money;$sub[$getUserVar[money;$authorID];$message];$authorID]
$description[You deposited :dollar: $message in your :bank: bank]
$author[$username;$authorAvatar]
$suppressErrors[Not a valid number!]
$onlyIf[$message<=$getUserVar[money;$authorID];That amount is higher than the amount in your wallet!]
$onlyIf[$message>0;You cannot deposit an amount lower than \`0\`. If you want to deposit all, then use the command \`*dep-all\`]
`
});

bot.command({
  name: "rob",
  code: `$deletecommand
$setUserVar[money;$sub[$getUserVar[money;$mentioned[1]];$random[1;$getUserVar[money;$mentioned[1]]]];$mentioned[1]]
$setUserVar[money;$sum[$getUserVar[money]]$random[1;$getUserVar[money;$mentioned[1]]]]]
$title[Robbed!]
$color[00ff00]
$description[$username robbed $username[mentioned[1]] and got $random[1;$getUserVar[money;$mentioned[1]]]]
$author[$username;$authorAvatar]
$onlyIf[$random[1;5]==3;{execute:AwaitedRobFail}]
$onlyIf[$getUserVar[money;$mentioned[1]>2999;That user doesn't have enough money to rob!]
$onlyIf[$getUserVar[money]>2999;You need at least $3000 to rob someone!]
$cooldown[2hr;You need to wait for %time% before trying to rob someone again!]
$onlyIf[$mentioned[1]!=;Please mention someone to rob!]
`
});

bot.awaitedCommand({
  name: "AwaitedRobFail",
  code: `$deletecommand
$setUserVar[money;$sum[$getUserVar[money;$mentioned[1]];$random[1;$getUserVar[money;$mentioned[1]]]];$mentioned[1]]
$setUserVar[money;$sub[$getUserVar[money]]$random[1;$getUserVar[money;$mentioned[1]]]]]
$title[Busted!]
$color[ff0000]
$description[$username was caught attempting to rob $username[mentioned[1]] and had to pay $random[1;$getUserVar[money;mentioned[1]]] as a fine]
$author[$username;$authorAvatar]
`
});

bot.command({
  name: "leaderboard",
  code: `$title[Balance Leaderboard]
  $userLeaderboard[money;desc]
$color[ff00ff]
`
});

bot.command({
  name: "balance",
  aliases: ["bal", "money"],
  code: `
$color[00ff00]
$description[:dollar: __**MONEY:**__ $getUserVar[money;$authorID]

:bank: __**BANK:**__ $getUserVar[bank;$authorID]

:credit_card: __**Net Worth:**__ $sum[$getUserVar[money;$authorID];$getUserVar[bank;$authorID]]
]
$author[$username;$authorAvatar]`
});

bot.command({
  name: "invite",

  code: `$title[INVITE]

$description[Want To Invite Me In Your Server?

Here's my invite link 
https://discord.com/oauth2/authorize?client_id=804720808182022245&scope=bot&permissions=2080898175

If you want Support Then Join My Official Support Server

Here my Official Support Server Join Link 
https://discord.gg/96BqdnWvh8 ]

$footer[Sak-bot]`
});

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;fuck;]
 $onlyIf[$getServerVar[bw]==true;]
 <@$authorID> Use of Bad Words or Swearing is Not Allowed in this server Reason: **AutoMod Enable**
 `
});

bot.command({
  name: "autoModon",
  code: `$setServerVar[bw;True]
 $onlyBotPerms[managemessages;Bot missing permission **MANAGE MASSAGES**]
 $onlyPerms[managechannels;You are not a moderate or Admin!]
 $title[AutoMod System]
 $description[AutoMod Enable]
 $footer[Request by $username ]
 $addTimestamp
 $color[WHITE]
`
});

bot.command({
  name: "autoModoff",
  code: `$setServerVar[bw;False]
 $onlyBotPerms[managemessages;Bot missing permission **MANAGE MASSAGES**]
 $onlyPerms[managechannels;You are not a moderator or Admin!]
 $title[AutoMod System]
 $description[AutoMod Disable]
 $footer[Request by $username ]
 $addTimestamp
 $color[WHITE]
 `
});

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;Fuck;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**
 `
});
bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;motherfucker;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**
 `
});
bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;Motherfucker;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this Server | Reason: **AutoMod Enable**
 `
});

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;Fucker;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**
 `
});

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `
  $deletecommand
 $onlyIfMessageContains[$message;fucker;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**
 `
});

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;Fucked;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**
 `
});

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;fucked;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**
 `
});

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;Hell;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**
 `
});

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `
 $deletecommand
 $onlyIfMessageContains[$message;hell;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**`
});

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;what the fuck;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**
 `
});

bot.command({
  name: "play",
  code: `$playSong[$message;1s]`
});

bot.command({
  name: "songinfo",
  code: `Currrently Playing: $songInfo[title]` //Returns song title
});

bot.command({
  name: "skip",
  code: `$skipSong`
});

bot.command({
  name: "volume",
  code: `
$volume[50]
`
});

bot.awaitedCommand({
  name: "awaitMusic1",
  code: `$editMessage[$message[1];{color:WHITE}
 {title:Skip}{description:The song was skipped}]
 $skipSong`
});

bot.awaitedCommand({
  name: "awaitMusic2",
  code: `$editMessage[$message[1];{color:WHITE}
 {title:Loop}{description:The queue was looped}]
 $loopQueue`
});

bot.awaitedCommand({
  name: "awaitMusic3",
  code: `$editMessage[$message[1];{color:WHITE}
 {title:Pause}{description:Paused}]
 $pauseSong`
});

bot.awaitedCommand({
  name: "awaitMusic4",
  code: `$editMessage[$message[1];{color:WHITE}
 {title:Resume}{description:Resumed}]
 $resumeSong`
});

bot.awaitedCommand({
  name: "awaitMusic5",
  code: `$editMessage[$message[1];{color:WHITE}
 {title:Music Config}{description:⏭️ - Skip
 🔄 - Loop
 ⏸️ - Pause
 ▶️ - Resume
 🔄 - Back}]`
});

bot.command({
  name: "music",
  usage: "music",
  description: "Calls up the music control menu",
  code: `$reactionCollector[$splitText[1];$authorID;1h;⏭️,🔄,⏸️,▶️,◀️;awaitMusic1,awaitMusic2,awaitMusic3,awaitMusic4,awaitMusic5;yes]
 $textSplit[$sendMessage[{color:WHITE}
 {title:Music Config}{description:⏭️ - Skip
 🔄 - Loop
 ⏸️ - Pause
 ▶️ - Resumе
 ◀️ - Back};yes]; ]
 $onlyIf[$voiceID[$authorID]!=;Sorry, but you are not connected to the voice channel.]]`
});

bot.command({
  name: "searchm",
  code: `
$awaitMessage[$authorid;10s;1,2,3,4,5;search1,search2,search3,search4,search5;No Question Picked]
$description[[ 1 \\] [$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=ama no jaku&choose=1;title]\\]($jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=ama no jaku&choose=1;url])
[ 2 \\] [$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=ama no jaku&choose=2;title]\\]($jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=ama no jaku&choose=2;url])
[ 3 \\] [$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=ama no jaku&choose=3;title]\\]($jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=ama no jaku&choose=3;url])
[ 4 \\] [$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=ama no jaku&choose=4;title]\\]($jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=ama no jaku&choose=4;url])
[ 5 \\] [$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=ama no jaku&choose=5;title]\\]($jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=ama no jaku&choose=5;url])
Type 1-5, this is will be canceled in 10s]
$title[Search . . .]
$thumbnail[$useravatar[$clientid]]
$color[RANDOM]
$footer[Music]
$argsCheck[>1;:x: Type the song name/url]
$onlyif[$voiceid!=;:x: You must join the voice channel first]`
});
bot.awaitedCommand({
  name: "search1",
  code: `Added to queue $playSong[$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$getservervar[search]&choose1;url];0s;yes;:x: Error while handling the song]`
});
bot.awaitedCommand({
  name: "search2",
  code: `Added to queue $playSong[$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$getservervar[search]&choose2;url];0s;yes;:x: Error while handling the song]`
});

bot.command({
  name: "avatar",
  aliases: ["av", "pfp"],
  code: `$author[$usertag[$finduser[$message]]]
$title[Download $usertag[$finduser[$message]]'s avatar with this hyperlink!;$useravatar[$finduser[$message]]]
$description[]
$image[$useravatar[$finduser[$message]]]
$footer[requested by $usertag;$authoravatar]
$addtimestamp
$color[RANDOM]`
});

bot.command({
 name: "help",
 code: `
 $color[RED]
 $thumbnail[$userAvatar[$clientID]]
 $if[$message[1]==]
 $author[$userTag[$clientID];$userAvatar[$clientID]]
 $addField[GUIDE;to See Commandlist or command type \`$getServerVar[prefix]help <Commandlist> or $getServerVar[prefix]help <Command>\`
Available Command list:
⚒️**AutoMod**
🔨**Moderate**
🗒️**Logs**
📝**Information**
🎮**Game**
😀**Action**
🔞**NSFW**
💲**Economy**
⬆️**Leveling and Ranking**
🗨️**Misc**
😂 **Fun**
✔️**Extra**
***If you need any support or advance help. Then you could join my official discord server. [Click Here](https://discord.gg/96BqdnWvh8) ***
;yes]
 $endIf
 $if[$message[1]==Leveling and Ranking]
 $author[$userTag[$clientID];$userAvatar[$clientID]]
 $addField[⬆️Leveling and Ranking;\`rank, setrankmsg, resetrank, setrank\`]
 $endIf
 $if[$message[1]==Economy]
 $addField[💸 Economy;\`balance, work, rob, deposit, withdraw\`]
 $endIf
$if[$message[1]==Fun]
 $addField[😂Fun;\`meme\`]
 $endIf
$if[$message[1]==Extra]
 $addField[✔️Extra;\`guide, JALLOGS guide, covid19, invite\`]
 $endIf
 $if[$message[1]==AutoMod]
 $addField[⚒️ AutoMod;\`autoModon, autoModoff\`]
$endIf
 $if[$message[1]==Misc]
 $addField[🗨 Misc;\`ping, help, helproulettle, avatar, setprefix, restprefix\`]
 $endIf
 $if[$message[1]==Moderate]
 $addField[🔨 Moderation;\`ban, kick, warn, unwarn, unmuted, muted, checkwarn\`]
 $endIf
 $if[$message[1]==Information]
 $addField[📝Information;\`manga, anime\`]
 $endIf
 $if[$message[1]==Logs]
 $addField[🗒️Logs;\`setwelcome, setleave\`]
 $endIf
 $if[$message[1]==Game]
 $addField[🎮Game;\`rps, roulette(under development)\`]
 $endIf
 $if[$message[1]==NSFW]
 $addField[🔞
NSFW;||\`pussy, boob, ass, porn\`||]
 $endIf
 $if[$message[1]==Action]
 $addField[😀Action;\`pat, smile, wave, hug, kiss, blush\`]
 $endIf
 $if[$message[1]==autoModon]
 $addField[autoModon;\`To on the AutoMod System. Usage: $getServerVar[prefix]autoModon\`]
 $endIf
 $if[$message[1]==autoModoff]
 $addField[autoModoff;\`To off the AutoMod System. Usage: $getServerVar[prefix]autoModoff\`]
 $endIf
 $if[$message[1]==rank]
 $addField[rank;\`To see your rank. Usage: $getServerVar[prefix]rank or $getServerVar[prefix]rank <user>\`]
 $endIf
 $if[$message[1]==setrankmsg]
 $addField[setrankmsg;\`To set a level-up or rank-up message. Usage: $getServerVar[prefix]setrankmsg <message>\`]
 $endIf
$if[$message[1]==covid19]
 $addField[covid19;\`to get covid19 result on a country. Usage: $getServerVar[prefix]covid19 <country>\`]
 $endIf
 $if[$message[1]==setrank]
 $addField[setrank;\`To set a rank channel. Usage: $getServerVar[prefix]setrank <channel>\`]
 $endIf
 $if[$message[1]==resetrank]
 $addField[resetrank;\`To reset or off the rank or level system. Usage: $getServerVar[prefix]resetrank\`]
 $endIf
 $if[$message[1]==balance]
 $addField[balance\`To see your balance. Usage: $getServerVar[prefix]balance\`]
 $endIf
 $if[$message[1]==work]
 $addField[work;\`To work. Usage: $getServerVar[prefix]work\`]
 $endIf
 $if[$message[1]==withdraw]
 $addField[withdraw;\`To Withdraw Money from bank(if you have). Usage: $getServerVar[prefix]withdraw <money> or $getServerVar[prefix]withdraw all\`]
 $endIf
 $if[$message[1]==deposit]
 $addField[deposit;\`To deposit money in bank. Usage: $getServerVar[prefix]deposit <money> or $getServerVar[prefix]deposit all\`]
 $endIf
 $if[$message[1]==rob]
 $addField[crime;\`To stole or rob money from user. Usage: $getServerVar[prefix]rob <user> \`]
 $endIf
 $if[$message[1]==ping]
 $addField[ping;\`To see my ping. Usage: $getServerVar[prefix]ping\`]
 $endIf
 $if[$message[1]==avatar]
 $addField[avatar;\`To see user or your Avatar. Usage: $getServerVar[prefix]avatar or $getServerVar[prefix]avatar <user>\`]
 $endIf
 $if[$message[1]==help]
 $addField[help;\`This. Usage: $getServerVar[prefix]help or $getServerVar[prefix]help <Commandlist> or $getServerVar[prefix]help <Command>\`]
 $endIf
$if[$message[1]==helproulettle]
 $addField[🗒️Logs;\`To get help on roulette. Usage: $getServerVar[prefix]helproulettle\`]
 $endIf
 $if[$message[1]==ban]
 $addField[ban;\`To ban a user from a server and require ban or administration permission. Usage: $getServerVar[prefix]ban <user>\`]
 $endIf
$if[$message[1]==guide]
 $addField[guide;\`Want some guide on BDFD? Then here is it. Usage: $getServerVar[prefix]guide\`]
 $endIf
$if[$message[1]==meme]
 $addField[meme;\`Want some random meme? Then here is it. Usage: $getServerVar[prefix]meme\`]
 $endIf
$if[$message[1]==JALLOGS guide]
 $addField[JALLOGS;\`Want some guide on Welcome and leave on BDFD? Then here is it. Usage: $getServerVar[prefix]JALLOGS guide\`]
 $endIf
 $if[$message[1]==kick]
 $addField[kick;\`To kick a user from a server and require kick or administration permission. Usage: $getServerVar[prefix]kick <user>\`]
 $endIf
 $if[$message[1]==warn]
 $addField[warn;\`To warn a user and require manage server or administration permission. Usage: $getServerVar[prefix]warn <user>\`]
 $endIf
$if[$message[1]==unwarn]
 $addField[unwarn;\`To unwarn a user and require manage server or administration permission. Usage: $getServerVar[prefix]unwarn <user>\`]
 $endIf
$if[$message[1]==checkwarn]
 $addField[checkwarn;\`To check warns of a user. Usage: $getServerVar[prefix]checkwarn <user>\`]
 $endIf
$if[$message[1]==muted]
 $addField[muted;\`To mute a user from a server and require manage server or administration permission and must my a role name muted. Usage: $getServerVar[prefix]mute <user>\`]
 $endIf
$if[$message[1]==unmute]
 $addField[unmute;\`To unmute a user from a server and require manage server or administration permission. Usage: $getServerVar[prefix]unmute <user>\`]
 $endIf
$if[$message[1]==manga]
 $addField[manga;\`To get information about a manga. Usage: $getServerVar[prefix]manga <manganame>\`]
 $endIf
$if[$message[1]==anime]
 $addField[anime;\`To get information about a anime. Usage: $getServerVar[prefix]anime <animename>\`]
 $endIf
$if[$message[1]==setwelcome]
 $addField[setwelcome;\`To set a channel where I will welcome user. Usage: $getServerVar[prefix]setwelcome <channel>\`]
 $endIf
$if[$message[1]==setleave]
 $addField[setleave;\`To set a channel where I will goodbye user. Usage: $getServerVar[prefix]setleave <channel>\`]
 $endIf
$if[$message[1]==invite]
 $addField[invite;\`Want my invite link? Usage: $getServerVar[prefix]invite\`]
 $endIf
$if[$message[1]==rps]
 $addField[rps;\`Want to play rock, paper, Scissors with me? Usage: $getServerVar[prefix]rps <rock or paper or Scissors>\`]
 $endIf
$if[$message[1]==roulette]
 $addField[roulette;\`Want to play roulette with me? Usage: $getServerVar[prefix]roulettle <bet>
Note: This Command is under development so it might not work.\`]
 $endIf
$if[$message[1]==pussy]
 $addField[pussy;\`Want some random pic and gif of ||pussy||? Usage: ||$getServerVar[prefix]pussy||\`]
 $endIf
$if[$message[1]==boob]
 $addField[boob;\`Want some random pic and gif of ||boobs||? Usage: ||$getServerVar[prefix]boob||\`]
 $endIf
$if[$message[1]==porn]
 $addField[porn;\`Want some random pic and gif of ||porn||? Usage: ||$getServerVar[prefix]porn||\`]
 $endIf
$if[$message[1]==ass]
 $addField[ass;\`Want some random pic and gif of ||ass||? Usage: ||$getServerVar[prefix]ass||\`]
 $endIf
$if[$message[1]==hug]
 $addField[hug;\`Want to give hug to someone? Usage: $getServerVar[prefix]hug <user>\`]
 $endIf
$if[$message[1]==smile]
 $addField[smile;\`Want to smile? Usage: $getServerVar[prefix]smile\`]
 $endIf
$if[$message[1]==kiss]
 $addField[kiss;\`Want to kiss someone?Usage: $getServerVar[prefix]kiss <user>\`]
 $endIf
$if[$message[1]==blush]
 $addField[blush;\`Want to show that you are getting blush? Usage: $getServerVar[prefix]blush\`]
 $endIf
$if[$message[1]==wave]
 $addField[wave;\`Want to wave someone? Usage: $getServerVar[prefix]wave <user>\`]
 $endIf
$if[$message[1]==pat]
 $addField[pat;\`Want to pat someone? Usage: $getServerVar[prefix]pat <user>\`]
 $endIf
`
});

bot.command({
name: "setprefix",
code:`$title[Prefix]
$description[Successfully added that Prefix]
$footer[Newest Prefix is `$message`]
$setServerVar[prefix;$message]
`
})

bot.command({
name: "resetprefix"
code: `$title[Reset Prefix]
$description[Successfully reseted and restored the default prefix]
$setServerVar[prefix;s.]
