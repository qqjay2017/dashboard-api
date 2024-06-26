import puppeteer from 'puppeteer';

async function init() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://m.weather.com.cn/mweather/101130504.shtml', { waitUntil: "domcontentloaded" });
  await page.setViewport({ width: 400, height: 700 });
  await page.waitForSelector('.skWeather h1');
  await page.waitForSelector('.weatherIcon img');

  const jsons = await page.evaluate(async () => {
    const tempDom = document.querySelector(".skWeather h1")
    const tempImgDom = document.querySelector(".weatherIcon img")
    const tempUnitDom = document.querySelector(".weatherIcon span")
    const tempDescDom = document.querySelector(".focTemp h2")
    const maxTempDom = document.querySelector(".focTemp p")

    const windDom = document.querySelector(".focOther .a_wind .focWind")
    const humidityDom = document.querySelector(".focOther .focSd")
    return {
      temp: tempDom?.innerHTML || '',
      tempImg: tempImgDom?.getAttribute('src') || '',
      tempUnit: tempUnitDom?.innerHTML || '',
      tempDesc: tempDescDom?.innerHTML || '',
      minMaxTemp: maxTempDom?.innerHTML || '',
      windDom: windDom?.innerHTML || '',
      humidity: humidityDom?.innerHTML,
    }
  })
  console.log(jsons, 'jsons')
}

init()