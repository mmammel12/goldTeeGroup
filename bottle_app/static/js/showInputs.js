let numInputs = $("#numPlayersSelect").val();

$("#numPlayersSelect").change(function () {
    let numPlayers = $("#numPlayersSelect").val();
    if (numInputs < numPlayers) {
        numInputs = numPlayers;

        for (playerNum = 1; playerNum < numPlayers; playerNum++) {
            let handicap = `<div class="row">
    <div class="ml-3 mw-25">
        <label for="p${playerNum}handicap">Player Handicap</label>
        <input type="number" class="form-control" id="p${playerNum}handicap" name="p${playerNum}handicap" max=100 min=-20>
    </div>
</div>`;
            for (holeNum = 1; holeNum <= 9; holeNum++) {
                let id = `p${playerNum}h${holeNum}Input`;
                let name = `p${playerNum}h${holeNum}`;
                let front9Inputs = `<div class="row">
    <div class="col">
        <label class="d-none d-md-inline" for=${id}>Hole ${holeNum}</label>
        <label class="d-md-none" for=${id}>${holeNum}</label>
        <input type="number" class="form-control" id=${id} name=${name} min=0>
    </div>
</div>`;
            }

            for (holeNum = 10; holeNum <= 18; holeNum++) {
                let id = `p${playerNum}h${holeNum}Input`;
                let name = `p${playerNum}h${holeNum}`;
                let back9Inputs = `<div class="row">
    <div class="col">
        <label class="d-none d-md-inline" for=${id}>Hole ${holeNum}</label>
        <label class="d-md-none" for=${id}>${holeNum}</label>
        <input type="number" class="form-control" id=${id} name=${name} min=0>
    </div>
</div>`;
            }

            let inputDiv = `<div id="player${playerNum}">
    <div class="form-group border rounded p-3">
        ${handicap}
        ${front9Inputs}
        ${back9Inputs}
    </div>
</div>`;

            $("#formInputs").append(inputDiv);
        }
    }
    else if (numInputs > numPlayers) {
        while (numInputs > numPlayers) {
            $("#formInputs").remove(`#player${numInputs}`);
            numInputs--;
        }

        numInputs = numPlayers;
    }
});

