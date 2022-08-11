const configPathUpload = (path) => {
    return path.split('\\').slice(2).join('/');
};

module.exports = {
    configPathUpload,
};
