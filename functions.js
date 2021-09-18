function searchForKey (textToSearch){
    var results = textToSearch.match(/id_token=(.*)\&/);
    return (results == null) ? "Didn't find a token in that text." : results[1];
}