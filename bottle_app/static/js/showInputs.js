$(function() {
    let numInputs = 1;
    $("#numPlayersSelect").change(function () {
        let numPlayers = parseInt($("#numPlayersSelect").val());
        if (numInputs < numPlayers) {
            for (i = numInputs; i < numPlayers; i++) {
                $("#player" + i).show();
            }
            numInputs = numPlayers;
        }
        else if (numInputs > numPlayers) {
            for (i = numInputs - 1; i >= numPlayers; i--) {
                $("#player" + i).hide();
            }

            numInputs = numPlayers;
        }
    });
});

