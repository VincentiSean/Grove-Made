let lastImage = 0;
let i;

let people = document.getElementsByClassName('person-img');
for (i = 0; i < people.length; i++) {
    // Add mouse event to create a hover effect for each respective person image
    people[i].addEventListener("mouseover", function (event){
        let personNum = parseInt(event.target.name);
        switch(personNum) {
            case 1:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sara-2020-B2.jpg%3F_v%3D1585933372.06?auto=format&ixlib=python-1.1.2&w=200&s=4129bc6d1015c4cbc57eb3a029949c56";
                break;
            case 2:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Dashia_B2.jpg%3F_v%3D1454971390.4?auto=format&ixlib=python-1.1.2&w=200&s=5e249d9290f5c5f0d4df0bc532ccec1a";
                break;
            case 3:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-John-2018-B1.jpg%3F_v%3D1529970563.92?auto=format&ixlib=python-1.1.2&w=200&s=16d21d0a5aa2e10abba3599455d483a9";
                break;
            case 4:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Ken-2017-B1.jpg%3F_v%3D1487285759.81?auto=format&ixlib=python-1.1.2&w=200&s=9bb676a5a9e43b74f1497b04f6d5ffbd";
                break;
            case 5:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Max-2017-B1.jpg%3F_v%3D1487621129.81?auto=format&ixlib=python-1.1.2&w=200&s=d4b9f1e1cc3a6299e188dfcd3c12ad7d";
                break;
            case 6:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Joe_813Captureone-1_edit_2.jpg%3F_v%3D1392968046.0?auto=format&ixlib=python-1.1.2&w=200&s=56d43d84fb580b455632fe6dc668e76a";
                break;
            case 7:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Ben_B2_1.jpg%3F_v%3D1536256969.19?auto=format&ixlib=python-1.1.2&w=200&s=52fead2bc4a473b6d0a6cba7bdcd2898";
                break;
            case 8:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Justin_B1_E6s05Bk.jpg%3F_v%3D1592236364.58?auto=format&ixlib=python-1.1.2&w=200&s=9d92b93ac90f21ab699c6c6fbbf7c17d";
                break;
            case 9:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Victor-2017-B1.jpg%3F_v%3D1487269127.92?auto=format&ixlib=python-1.1.2&w=200&s=0c59d7e5ff0edb3058b1cd5beef58868";
                break;
            case 10:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Keckeley-2020-B1.jpg%3F_v%3D1585945083.56?auto=format&ixlib=python-1.1.2&w=200&s=a7c22c0ed3f1f2c348d6a5cb1ca07325";
                break;
            case 11:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christopher-2020-B3.jpg%3F_v%3D1585933691.3?auto=format&ixlib=python-1.1.2&w=200&s=7fe611fe330426af2338698ee6df62ca";
                break;
            case 12:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sean-2020-B1.jpg%3F_v%3D1586203279.76?auto=format&ixlib=python-1.1.2&w=200&s=a075aa02d64fdb09d24a0a286aa3879d";
                break;
            case 13:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Mike-2020-B2.jpg%3F_v%3D1585930983.21?auto=format&ixlib=python-1.1.2&w=200&s=3bf171d32929959e3d0c4bd1560f4168";
                break;
            case 14:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Lydia-2020-B1.jpg%3F_v%3D1585945210.68?auto=format&ixlib=python-1.1.2&w=200&s=e09b78f088d4ace01bc1d41960f1ae49";
                break;
            case 15:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christian-2020-B1.jpg%3F_v%3D1586197301.22?auto=format&ixlib=python-1.1.2&w=200&s=1157eae6112ddce2e8c44ff3be3ff4c8";
                break;
            case 16:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nick-2020-B1.jpg%3F_v%3D1585950624.55?auto=format&ixlib=python-1.1.2&w=200&s=adedcfef8a4f33318c7bdbc93688b4f9";
                break;
            case 17:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nozomi-2017-B1.jpg%3F_v%3D1488819935.12?auto=format&ixlib=python-1.1.2&w=200&s=8f3b62180d49a38e54dc1823a7b37718";
                break;
            case 18:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Kevin_B1_SyocJtF.jpg%3F_v%3D1592236569.79?auto=format&ixlib=python-1.1.2&w=200&s=4ff76f28f7d8c6039648f990458ecde3";
                break;
        }
    });
    // Add mouse event to end hover effect for each respective person image
    people[i].addEventListener("mouseout", function (event){
        console.log('oops');
        let personNum = parseInt(event.target.name);
        switch(personNum) {
            case 1:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sara-2020-A2.jpg%3F_v%3D1585933372.06?auto=format&ixlib=python-1.1.2&w=200&s=5317c0f4ed0ce44e467ece79a53084fa";
                break;
            case 2:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Dashia-2017-A1_1.jpg%3F_v%3D1487269722.91?auto=format&ixlib=python-1.1.2&w=200&s=45abb6c0e5f878469240c734aa0826af";
                break;
            case 3:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-John-2018-A1.jpg%3F_v%3D1529970563.92?auto=format&ixlib=python-1.1.2&w=200&s=8d465bdf8747454263a09d55a153e06b";
                break;
            case 4:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Ken-2017-A1.jpg%3F_v%3D1487285759.81?auto=format&ixlib=python-1.1.2&w=200&s=e75e27c0af6329916099dfd504bfee33";
                break;
            case 5:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Max-2017-A1.jpg%3F_v%3D1487621129.81?auto=format&ixlib=python-1.1.2&w=200&s=d6b1234bdc9ce9d6a35420fcc586e470";
                break;
            case 6:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Joe_011Captureone-1_edit_1.jpg%3F_v%3D1392967213.0?auto=format&ixlib=python-1.1.2&w=200&s=df44057ea59c0cbdc4ce6a7de9800c4a";
                break;
            case 7:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Ben_A2_1.jpg%3F_v%3D1536256969.19?auto=format&ixlib=python-1.1.2&w=200&s=3d6c28fde5a82c9672025fc68e2ae44a";
                break;
            case 8:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Justin_A1_5GYwcqK.jpg%3F_v%3D1592236364.58?auto=format&ixlib=python-1.1.2&w=200&s=a5bc8e0bde8800a78decd973c3cbe9ba";
                break;
            case 9:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Victor-2017-A1.jpg%3F_v%3D1487269127.92?auto=format&ixlib=python-1.1.2&w=200&s=653f9d3d611a474cdff030e92a0e97bc";
                break;
            case 10:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Keckeley-2020-A1.jpg%3F_v%3D1585945083.56?auto=format&ixlib=python-1.1.2&w=200&s=b2715455b5d452c99fda2768a9a615ce";
                break;
            case 11:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christopher-2020-A2.jpg%3F_v%3D1585932229.33?auto=format&ixlib=python-1.1.2&w=200&s=db204a798e033c2b7e1f6ee2c1902e0b";
                break;
            case 12:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sean-2020-A1.jpg%3F_v%3D1586203279.76?auto=format&ixlib=python-1.1.2&w=200&s=7367f4f031bcacdbff64384325fef84e";
                break;
            case 13:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Mike-2020-A2.jpg%3F_v%3D1585930983.21?auto=format&ixlib=python-1.1.2&w=200&s=d825f8349f4b14cf4bfde711ceabf351";
                break;
            case 14:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Lydia-2020-A2.jpg%3F_v%3D1585950915.6?auto=format&ixlib=python-1.1.2&w=200&s=623b13baa1c2eb59f2a1c87db41d560a";
                break;
            case 15:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christian-2020-A1.jpg%3F_v%3D1586197301.22?auto=format&ixlib=python-1.1.2&w=200&s=0af3031172a2ce388ba342b0d98dba78";
                break;
            case 16:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nick-2020-A1.jpg%3F_v%3D1585950624.55?auto=format&ixlib=python-1.1.2&w=200&s=0cbae4fbc904ea940e9bdc6787f5ca91";
                break;
            case 17:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nozomi-2017-A1.jpg%3F_v%3D1488819935.12?auto=format&ixlib=python-1.1.2&w=200&s=d20d30c78ef68b71800c0cea7699a247";
                break;
            case 18:
                event.target.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Kevin_A1_6W7sppX.jpg%3F_v%3D1592236569.79?auto=format&ixlib=python-1.1.2&w=200&s=389c695996b7cf4464a94e8b11ec8264";
                break;
        }
    });
}

// If a person image is clicked, change the image and make the person's info div appear
function personInfo(num, clickedImg) {
    
    let img = clickedImg;
    oldInfo();
    switch(num) {
        case 1:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sara-2020-B2.jpg%3F_v%3D1585933372.06?auto=format&ixlib=python-1.1.2&w=200&s=4129bc6d1015c4cbc57eb3a029949c56";
            document.getElementById('one').style.display = 'block';
            lastImage = 1;
            break;
        case 2:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Dashia_B2.jpg%3F_v%3D1454971390.4?auto=format&ixlib=python-1.1.2&w=200&s=5e249d9290f5c5f0d4df0bc532ccec1a";
            document.getElementById('two').style.display = 'block';
            lastImage = 2;
            break;
        case 3:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-John-2018-B1.jpg%3F_v%3D1529970563.92?auto=format&ixlib=python-1.1.2&w=200&s=16d21d0a5aa2e10abba3599455d483a9";
            document.getElementById('three').style.display = 'block';
            lastImage = 3;
            break;
        case 4:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Ken-2017-B1.jpg%3F_v%3D1487285759.81?auto=format&ixlib=python-1.1.2&w=200&s=9bb676a5a9e43b74f1497b04f6d5ffbd";
            document.getElementById('four').style.display = 'block';
            lastImage = 4;
            break;
        case 5:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Max-2017-B1.jpg%3F_v%3D1487621129.81?auto=format&ixlib=python-1.1.2&w=200&s=d4b9f1e1cc3a6299e188dfcd3c12ad7d";
            document.getElementById('five').style.display = 'block';
            lastImage = 5;
            break;
        case 6:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Joe_813Captureone-1_edit_2.jpg%3F_v%3D1392968046.0?auto=format&ixlib=python-1.1.2&w=200&s=56d43d84fb580b455632fe6dc668e76a";
            document.getElementById('six').style.display = 'block';
            lastImage = 6;
            break;
        case 7:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Ben_B2_1.jpg%3F_v%3D1536256969.19?auto=format&ixlib=python-1.1.2&w=200&s=52fead2bc4a473b6d0a6cba7bdcd2898";
            document.getElementById('seven').style.display = 'block';
            lastImage = 7;
            break;
        case 8:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Justin_B1_E6s05Bk.jpg%3F_v%3D1592236364.58?auto=format&ixlib=python-1.1.2&w=200&s=9d92b93ac90f21ab699c6c6fbbf7c17d";
            document.getElementById('eight').style.display = 'block';
            lastImage = 8;
            break;
        case 9:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Victor-2017-B1.jpg%3F_v%3D1487269127.92?auto=format&ixlib=python-1.1.2&w=200&s=0c59d7e5ff0edb3058b1cd5beef58868";
            document.getElementById('nine').style.display = 'block';
            lastImage = 9;
            break;
        case 10:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Keckeley-2020-B1.jpg%3F_v%3D1585945083.56?auto=format&ixlib=python-1.1.2&w=200&s=a7c22c0ed3f1f2c348d6a5cb1ca07325";
            document.getElementById('ten').style.display = 'block';
            lastImage = 10;
            break;
        case 11:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christopher-2020-B3.jpg%3F_v%3D1585933691.3?auto=format&ixlib=python-1.1.2&w=200&s=7fe611fe330426af2338698ee6df62ca";
            document.getElementById('eleven').style.display = 'block';
            lastImage = 11;
            break;
        case 12:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sean-2020-B1.jpg%3F_v%3D1586203279.76?auto=format&ixlib=python-1.1.2&w=200&s=a075aa02d64fdb09d24a0a286aa3879d";
            document.getElementById('twelve').style.display = 'block';
            lastImage = 12;
            break;
        case 13:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Mike-2020-B2.jpg%3F_v%3D1585930983.21?auto=format&ixlib=python-1.1.2&w=200&s=3bf171d32929959e3d0c4bd1560f4168";
            document.getElementById('thirteen').style.display = 'block';
            lastImage = 13;
            break;
        case 14:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Lydia-2020-B1.jpg%3F_v%3D1585945210.68?auto=format&ixlib=python-1.1.2&w=200&s=e09b78f088d4ace01bc1d41960f1ae49";
            document.getElementById('fourteen').style.display = 'block';
            lastImage = 14;
            break;
        case 15:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christian-2020-B1.jpg%3F_v%3D1586197301.22?auto=format&ixlib=python-1.1.2&w=200&s=1157eae6112ddce2e8c44ff3be3ff4c8";
            document.getElementById('fifteen').style.display = 'block';
            lastImage = 15;
            break;
        case 16:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nick-2020-B1.jpg%3F_v%3D1585950624.55?auto=format&ixlib=python-1.1.2&w=200&s=adedcfef8a4f33318c7bdbc93688b4f9";
            document.getElementById('sixteen').style.display = 'block';
            lastImage = 16;
            break;
        case 17:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nozomi-2017-B1.jpg%3F_v%3D1488819935.12?auto=format&ixlib=python-1.1.2&w=200&s=8f3b62180d49a38e54dc1823a7b37718";
            document.getElementById('seventeen').style.display = 'block';
            lastImage = 17;
            break;
        case 18:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Kevin_B1_SyocJtF.jpg%3F_v%3D1592236569.79?auto=format&ixlib=python-1.1.2&w=200&s=4ff76f28f7d8c6039648f990458ecde3";
            document.getElementById('eighteen').style.display = 'block';
            lastImage = 18;
            break;
    }

}

// If someone else's person image is clicked, change the old one back and hide the old info div
function oldInfo() {
    let img = document.getElementsByClassName('person-img')[lastImage - 1];
    switch(lastImage) {
        case 1:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sara-2020-A2.jpg%3F_v%3D1585933372.06?auto=format&ixlib=python-1.1.2&w=200&s=5317c0f4ed0ce44e467ece79a53084fa";
            document.getElementById('one').style.display = 'none';
            break;
        case 2:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Dashia-2017-A1_1.jpg%3F_v%3D1487269722.91?auto=format&ixlib=python-1.1.2&w=200&s=45abb6c0e5f878469240c734aa0826af";
            document.getElementById('two').style.display = 'none';
            break;
        case 3:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-John-2018-A1.jpg%3F_v%3D1529970563.92?auto=format&ixlib=python-1.1.2&w=200&s=8d465bdf8747454263a09d55a153e06b";
            document.getElementById('three').style.display = 'none';
            break;
        case 4:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Ken-2017-A1.jpg%3F_v%3D1487285759.81?auto=format&ixlib=python-1.1.2&w=200&s=e75e27c0af6329916099dfd504bfee33";
            document.getElementById('four').style.display = 'none';
            break;
        case 5:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Max-2017-A1.jpg%3F_v%3D1487621129.81?auto=format&ixlib=python-1.1.2&w=200&s=d6b1234bdc9ce9d6a35420fcc586e470";
            document.getElementById('five').style.display = 'none';
            break;
        case 6:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Joe_011Captureone-1_edit_1.jpg%3F_v%3D1392967213.0?auto=format&ixlib=python-1.1.2&w=200&s=df44057ea59c0cbdc4ce6a7de9800c4a";
            document.getElementById('six').style.display = 'none';
            break;
        case 7:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Ben_A2_1.jpg%3F_v%3D1536256969.19?auto=format&ixlib=python-1.1.2&w=200&s=3d6c28fde5a82c9672025fc68e2ae44a";
            document.getElementById('seven').style.display = 'none';
            break;
        case 8:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Justin_A1_5GYwcqK.jpg%3F_v%3D1592236364.58?auto=format&ixlib=python-1.1.2&w=200&s=a5bc8e0bde8800a78decd973c3cbe9ba";
            document.getElementById('eight').style.display = 'none';
            break;
        case 9:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Victor-2017-A1.jpg%3F_v%3D1487269127.92?auto=format&ixlib=python-1.1.2&w=200&s=653f9d3d611a474cdff030e92a0e97bc";
            document.getElementById('nine').style.display = 'none';
            break;
        case 10:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Keckeley-2020-A1.jpg%3F_v%3D1585945083.56?auto=format&ixlib=python-1.1.2&w=200&s=b2715455b5d452c99fda2768a9a615ce";
            document.getElementById('ten').style.display = 'none';
            break;
        case 11:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christopher-2020-A2.jpg%3F_v%3D1585932229.33?auto=format&ixlib=python-1.1.2&w=200&s=db204a798e033c2b7e1f6ee2c1902e0b";
            document.getElementById('eleven').style.display = 'none';
            break;
        case 12:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Sean-2020-A1.jpg%3F_v%3D1586203279.76?auto=format&ixlib=python-1.1.2&w=200&s=7367f4f031bcacdbff64384325fef84e";
            document.getElementById('twelve').style.display = 'none';
            break;
        case 13:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Mike-2020-A2.jpg%3F_v%3D1585930983.21?auto=format&ixlib=python-1.1.2&w=200&s=d825f8349f4b14cf4bfde711ceabf351";
            document.getElementById('thirteen').style.display = 'none';
            break;
        case 14:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Lydia-2020-A2.jpg%3F_v%3D1585950915.6?auto=format&ixlib=python-1.1.2&w=200&s=623b13baa1c2eb59f2a1c87db41d560a";
            document.getElementById('fourteen').style.display = 'none';
            break;
        case 15:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Christian-2020-A1.jpg%3F_v%3D1586197301.22?auto=format&ixlib=python-1.1.2&w=200&s=0af3031172a2ce388ba342b0d98dba78";
            document.getElementById('fifteen').style.display = 'none';
            break;
        case 16:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nick-2020-A1.jpg%3F_v%3D1585950624.55?auto=format&ixlib=python-1.1.2&w=200&s=0cbae4fbc904ea940e9bdc6787f5ca91";
            document.getElementById('sixteen').style.display = 'none';
            break;
        case 17:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits-Nozomi-2017-A1.jpg%3F_v%3D1488819935.12?auto=format&ixlib=python-1.1.2&w=200&s=d20d30c78ef68b71800c0cea7699a247";
            document.getElementById('seventeen').style.display = 'none';
            break;
        case 18:
            img.src = "https://grovemade.imgix.net/http%3A%2F%2Fgrovemade.com%2Fshop-static%2Fteam%2FPortraits_Grove_Kevin_A1_6W7sppX.jpg%3F_v%3D1592236569.79?auto=format&ixlib=python-1.1.2&w=200&s=389c695996b7cf4464a94e8b11ec8264";
            document.getElementById('eighteen').style.display = 'none';
            break;
    }

}

