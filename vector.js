(function sol(){
    function add(vec1, vec2){
        let result = [];

        result.push(vec1[0]+vec2[0]);

        result.push(vec1[1]+vec2[1]);

        return result;
    }

    function multiply(vec1, scalar){
        let result = [];

        result.push(vec1[0]*scalar);

        result.push(vec1[1]*scalar);

        return result;
    }
    
    function length(vec1) {
        let result = Math.sqrt(Math.pow(vec1[0], 2)+Math.pow(vec1[1], 2));

        return result;
    }

    function dot(vec1, vec2){
        let result = vec1[0]*vec1[1]+vec2[0]*vec2[1];

        return result;
    }

    function cross(vec1, vec2){
        let result = vec1[0]*vec2[1]-vec1[1]*vec2[0];

        return result;
    }

    return{
        add,
        multiply,
        length,
        dot,
        cross
    }
})()

solution.cross([3, 7], [1, 0]);