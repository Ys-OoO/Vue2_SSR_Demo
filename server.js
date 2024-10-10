const fs = require('fs');
const path = require('path');
const express = require('express');
const resolve = filePath => path.resolve(__dirname, filePath);
const { createBundleRenderer } = require('vue-server-renderer');


const isProd = process.env.NODE_ENV === 'production';
const app = express();

function render(req, res) {
    res.setHeader("Content-Type", "text/html");
    const context = {
        title: 'Ys-OoO',
        url: req.url
    };

    const bundle = fs.readFileSync(resolve('./dist/server-bundle.js'), 'utf-8');
    const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf-8');
    const renderer = createBundleRenderer(bundle, {
        template
    })

    // * renderToString方法会将bundle转换为HTML, 并嵌入template中
    // * 此外，他会将centext传入并执行bundle导出的函数
    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.url) {
                res.redirect(err.url);
            } else if (err.code === 404) {
                res.status(404).send('404 | Page Not Found');
            } else {
                res.status(500).send('500 | Internal Server Error');
            }
        }
        res.send(html);
    })
}

const serve = (path, cache) => express.static(resolve(path), {
    maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

// 以dist文件开启服务,服务映射的路径为/dist
app.use('/dist', serve('./dist', true));
// 以public文件夹开启静态服务，服务映射的路径为/public
app.use('/public', serve('./public', true));

app.get('*', render);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});