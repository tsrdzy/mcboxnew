// 字体文件读取
const path = window.require('path');
if (process.env.NODE_ENV === "development") {
    // 开发环境
    const urls1 = path.join(
        process.cwd(),
        "public",
        "MCBOX",
        "resource",
        "fonts"
    );
    addFontToDOM(
        "opposansH",
        urls1 + "/OPPOSans-H-2.ttf"
    );
    addFontToDOM(
        "opposansR",
        urls1 + "/OPPOSans-R-2.ttf"
    );
    addFontToDOM(
        "minecraft-title",
        urls1 + "/Minecrafter.Alt.ttf"
    );
    addFontToDOM(
        "minecraft",
        urls1 + "/Minecraft-AE.ttf"
    );
    addFontToDOM(
        "sjxkjt",
        urls1 + "/SanJiXingKaiJianTi-Cu-2.ttf"
    );
} else {
    // 生产环境
    console.log(2)
    const urls = path.join(
        process.cwd(),
        "resources",
        "public",
        "MCBOX",
        "resource",
        "fonts"
    );
    addFontToDOM(
        "opposansH",
        urls + "/OPPOSans-H-2.ttf"
    );
    addFontToDOM(
        "opposansR",
        urls + "/OPPOSans-R-2.ttf"
    );
    addFontToDOM(
        "minecraft-title",
        urls + "/Minecrafter.Alt.ttf"
    );
    addFontToDOM(
        "minecraft",
        urls + "/Minecraft-AE.ttf"
    );
    addFontToDOM(
        "sjxkjt",
        urls + "/SanJiXingKaiJianTi-Cu-2.ttf"
    );
}
function addFontToDOM(fontFamily, fontPath) {
    const style = document.createElement('style');
    style.type = 'text/css';
    let allcss = "@font-face{font-family:'"
        + fontFamily + "';src:url('" + fontPath + "')format('truetype');}"
    allcss = allcss.replace(/\\/g, "/")
    style.appendChild(document.createTextNode(allcss));
    document.head.appendChild(style);
}
