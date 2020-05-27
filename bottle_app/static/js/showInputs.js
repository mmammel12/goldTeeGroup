$(function() {
    $("#numPlayersSelect").change(function () {
        let numPlayers = $("#numPlayersSelect").val();
        let numInputs = $("#formInputs").children(".players").length;
        console.log(numInputs);
        console.log(numPlayers);
        if (numInputs < numPlayers) {
            let handicap, front9Inputs, back9Inputs;

            for (playerNum = numInputs; playerNum < numPlayers; playerNum++) {
                handicap = `<div class="row">
    <div class="ml-3 mw-25">
        <label for="p${playerNum}handicap">Player Handicap</label>
        <input type="number" class="form-control" id="p${playerNum}handicap" name="p${playerNum}handicap" max=100 min=-20>
    </div>
</div>`;
                for (holeNum = 1; holeNum <= 9; holeNum++) {
                    let id = `p${playerNum}h${holeNum}Input`;
                    let name = `p${playerNum}h${holeNum}`;
                    front9Inputs += `<div class="col">
    <label class="d-none d-md-inline" for=${id}>Hole ${holeNum}</label>
    <label class="d-md-none" for=${id}>${holeNum}</label>
    <input type="number" class="form-control" id=${id} name=${name} min=0>
</div>
`;
                }

                for (holeNum = 10; holeNum <= 18; holeNum++) {
                    let id = `p${playerNum}h${holeNum}Input`;
                    let name = `p${playerNum}h${holeNum}`;
                    back9Inputs += `<div class="col">
    <label class="d-none d-md-inline" for=${id}>Hole ${holeNum}</label>
    <label class="d-md-none" for=${id}>${holeNum}</label>
    <input type="number" class="form-control" id=${id} name=${name} min=0>
</div>
`;
                }

                let front9Div = `<div class="row">
    ${front9Inputs}
</div>`;
                let back9Div = `<div class="row">
    ${back9Inputs}
</div>`;

                let inputDiv = `<div id="player${playerNum}" class="players">
        <div class="form-group border rounded p-3">
            ${handicap}
            ${front9Div}
            ${back9Div}
        </div>
    </div>`;

                $("#formInputs").append(inputDiv);
            }
            numInputs = numPlayers;
        }
        else if (numInputs > numPlayers) {
            while (numInputs > numPlayers) {
                console.log(numInputs);
                $("#formInputs").remove("#player" + numInputs);
                numInputs--;
            }

            numInputs = numPlayers;
        }
    });
});

