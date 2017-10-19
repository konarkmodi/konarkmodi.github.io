    self.importScripts('dexie.js');
    self.onmessage = function(event) {
     //
     // Declare Database
     //
     var db = new Dexie("test");
     db.version(1).stores({
       v: "++id,visit, type"
     });


     db.v.add({visit: Date.now(), type: 'worker'}).then(function() {
      db.v.where('type').equals('worker').toArray(e => self.postMessage(e.length));

    }).catch(e => self.postMessage(e))

    };
