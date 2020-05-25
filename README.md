# Middleware 實作練習

使用 Node/Express ，做一支 middleware 來偵測伺服器收到請求的狀態。

## Feature

伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡，包括：

* 時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
* 請求的 HTTP 方法
* URL

## Install and Use

1. 終端機輸入
```
git clone https://github.com/Mia-Chen-taiwan/middleware-practice.git
```

2. 安裝套件
```
npm install
```

3. 執行
```
npm run dev
```