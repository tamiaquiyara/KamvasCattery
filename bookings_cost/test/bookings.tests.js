describe('This bookingCost function' , function(){
    it('should calculate the booking request cost for Monday to Wednesday' , function(){
        assert.equal(135,bookingCost("3*45"));
    });

    it('should calculate the booking request cost for Wednesday to Friday'  , function(){
        assert.equal(101.25,bookingCost("Wednesday","3"*"0.75"));
    });

    it('should calculate the booking request cost for Friday to Sunday' , function(){
        assert.equal(114.75,bookingCost("45*3"));
    });


});
