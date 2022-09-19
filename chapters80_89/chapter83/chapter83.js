// Chapter 83
/*
<form onSubmit="return checkforselection();">
    <select id="states">
        <option value="" selected="selected">
            SELECT A STATE</option>
                <option value="al">alabama</option>
                <option value="ak">alaska</option>
                <option value="az">arizona</option>
                <option value="ar">arkansas</option>
    </select>&nbsp;&nbsp;
    <input type="submit" value="Submit Form">
</form>
*/
function checkforselection(){
    var targestindex = document.getElementById("states");
    if (targestindex.selectedIndex == 0){
        alert("select")
        return false;
    }
}