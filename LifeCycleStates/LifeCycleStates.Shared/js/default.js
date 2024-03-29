﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {

        //previous state
        for (var state in activation.ApplicationExecutionState) {
            if (args.detail.previousExecutionState == activation.ApplicationExecutionState[state]) previousState.innerText = state;
        }

        //activation kind
        for (var kind in activation.ActivationKind) {
            if (args.detail.kind == activation.ActivationKind[kind]) activationKind.innerText = kind;
        }

        if (args.detail.kind === activation.ActivationKind.launch) {
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();