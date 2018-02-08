module.exports = {
    root: process.cwd(),
    hostname: '127.0.0.1',
    port: 9527,
    compress: /\.(html|js|json|css|md)/,
    cache : {
        maxAge: 600, // 600 sec , 10 min
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
}
