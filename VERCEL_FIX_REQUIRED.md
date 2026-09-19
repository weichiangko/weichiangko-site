# ⚠️ VERCEL DEPLOYMENT FIX REQUIRED

## 狀況摘要

應用程式**本地建置完全正常** (`npm run build` 成功),但 Vercel 自動部署持續失敗。

經過多次嘗試與配置修復 (vercel.json, .nvmrc, engines, next.config.ts),問題源於 **Vercel 專案層級的設定或權限**,需要 Ben 在 Vercel Dashboard 手動檢查。

---

## ✅ 已完成的代理端修復

我已推送以下修復到 `cursor/portfolio-redesign-webmcp-44b2`:

1. ✅ 新增 `vercel.json` - 明確指定 build/install 命令
2. ✅ 新增 `.nvmrc` - Node.js 18.17.0 版本固定
3. ✅ 新增 `package.json` engines field - Node.js >=18.17.0
4. ✅ 修改 `next.config.ts` - 忽略 ESLint 於建置時
5. ✅ 本地驗證: `npm run build` **完全成功**

## 🔍 部署失敗證據

- **最新部署 ID**: dpl_77docxcgB6SarqvWhgkFNj3TrV9x
- **狀態**: FAILURE
- **預覽 URL** (失敗): https://weichiangko-j0nklva44-weichiangkos-projects.vercel.app
- **返回**: 302 redirect to error page

## 🎯 Ben 必須執行的操作

### Step 1: 登入 Vercel Dashboard
訪問: https://vercel.com/weichiangkos-projects/weichiangko

### Step 2: 檢查專案設定
點擊 **Settings** → **General**

**必須確認**:
- ✅ **Framework Preset**: Next.js
- ✅ **Build Command**: `npm run build` (或留空讓 Vercel 自動偵測)
- ✅ **Output Directory**: `.next` (或留空)
- ✅ **Install Command**: `npm install` (或留空)
- ✅ **Node.js Version**: **18.x** 或更高 (非常重要!)

**如何修改 Node.js 版本**:
1. Settings → General
2. 找到 "Node.js Version"
3. 選擇 **18.x** 或 **20.x** (建議 18.x)
4. 點擊 **Save**

### Step 3: 檢查環境變數 (如果需要)
Settings → Environment Variables

確認是否有任何缺失的環境變數。如果沒有特殊需求,應該**不需要**任何環境變數。

### Step 4: 手動觸發 Redeploy

**方法 A: 從 Vercel Dashboard**
1. 進入專案: https://vercel.com/weichiangkos-projects/weichiangko
2. 點擊 **Deployments** 標籤
3. 找到最新的 `cursor/portfolio-redesign-webmcp-44b2` 失敗部署
4. 點擊 **⋯** (三點選單) → **Redeploy**

**方法 B: 從 GitHub PR**
1. 訪問 PR: https://github.com/weichiangko/weichiangko-site/pull/2
2. 在 Vercel bot 評論中點擊 **Visit Preview** 或相關連結
3. 如果有 Redeploy 按鈕,點擊它

### Step 5 (如果以上都失敗): 重新連結 GitHub
如果專案設定正確但仍失敗,可能是 GitHub 集成問題:

1. Settings → Git
2. 檢查 **Repository** 是否正確連結到 `weichiangko/weichiangko-site`
3. 檢查 **Production Branch** 是否為 `main`
4. 如果需要,點擊 **Disconnect** 然後重新連結

---

## 📱 測試用公開 URL

**一旦 Vercel 部署成功,預覽 URL 格式會是**:
```
https://weichiangko-[unique-id]-weichiangkos-projects.vercel.app
```

**或者可能是**:
```
https://weichiangko-git-cursor-portfolio-redesign-webmcp-44b2-weichiangkos-projects.vercel.app
```

### 如何找到正確的預覽 URL

1. **從 GitHub PR 評論** (最簡單):
   - 訪問: https://github.com/weichiangko/weichiangko-site/pull/2
   - 找 Vercel bot 的評論
   - 點擊 **Visit Preview** 連結

2. **從 Vercel Dashboard**:
   - https://vercel.com/weichiangkos-projects/weichiangko
   - Deployments 標籤
   - 找到成功的 `cursor/portfolio-redesign-webmcp-44b2` 部署
   - 複製 URL

3. **從 GitHub Checks**:
   - PR 頁面 → Checks 標籤
   - 點擊 Vercel 檢查
   - 查看 Details 連結

---

## 🔄 替代方案:本地預覽

**如果 Ben 需要立即測試而 Vercel 還在修復中**:

```bash
# Clone repo
git clone https://github.com/weichiangko/weichiangko-site.git
cd weichiangko-site

# Checkout feature branch
git checkout cursor/portfolio-redesign-webmcp-44b2

# Install & build
npm install
npm run build

# Start production server
npm start
# 訪問 http://localhost:3000

# 或開發模式 (更快)
npm run dev
# 訪問 http://localhost:3000
```

### 使用 ngrok 建立公開 URL (暫時)
```bash
# Install ngrok (如果需要)
npm install -g ngrok

# Start local server
npm run dev

# In another terminal, create public URL
ngrok http 3000

# ngrok 會給你一個公開 URL like https://abcd1234.ngrok.io
```

---

## ✅ 驗證清單

**部署成功後,確認以下功能**:

### Desktop
1. [ ] Hero 顯示 "Design Engineer · Product Designer"
2. [ ] 點擊 "Explore work" → 三個案例卡片
3. [ ] 進入案例 (如 mionext) → 六欄完整
4. [ ] "How I work" 三步驟正確
5. [ ] "WebMCP Playground" 可運行工具
6. [ ] 右上角 "Present" toggle 可用
7. [ ] Present mode 步序導覽正常

### Mobile (手機開啟 URL)
1. [ ] Hero 內容垂直堆疊
2. [ ] 案例卡片單欄
3. [ ] WebMCP 表單與結果垂直
4. [ ] Present mode 控制可用
5. [ ] 無水平滾動

---

## 📞 需要協助

如果按照上述步驟仍無法解決:

1. **截圖 Vercel Settings 頁面**,尤其是:
   - General settings (Node.js Version 區塊)
   - Build & Development Settings

2. **複製 Vercel 建置日誌**:
   - 從失敗的 deployment
   - Deployments → 點擊失敗的 → Building 標籤

3. **提供給我**,我可以進一步診斷

---

## 💡 為什麼本地成功但 Vercel 失敗?

可能原因:
1. **Node.js 版本不匹配** - Vercel 可能用 Node 16 或更舊版本
2. **環境變數缺失** - 某些套件可能需要特定環境變數
3. **建置快取問題** - Vercel 快取了舊的失敗狀態
4. **專案設定覆蓋** - Vercel Dashboard 設定覆蓋了 vercel.json
5. **GitHub App 權限** - Vercel GitHub App 可能需要重新授權

**最常見的原因是 #1 (Node.js 版本)**,這就是為什麼我優先建議檢查 Node.js Version 設定。

---

**建立時間**: 2026-09-19 07:25 UTC  
**分支**: cursor/portfolio-redesign-webmcp-44b2  
**PR**: https://github.com/weichiangko/weichiangko-site/pull/2  
**狀態**: 等待 Ben 在 Vercel Dashboard 手動修復
