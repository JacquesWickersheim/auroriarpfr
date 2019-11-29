//Chargement des pages, j'ai masqué toutes les caractéristiques
$(window).on('load', function(){
	$('p').hide()
})//Fin Chargement Page
//on charge le reste de la page et du JS sur le DOM
$(function(){
	
	setInterval (function(){
		$('h2').fadeOut(2000).delay().fadeIn(1000).delay().fadeOut(2000)
	}, 4000)
	
	$('#voiture1').on('mousedown', afficherVehicule1)
	$('#voiture1').on('mouseup', masquerVehicule1)
	
	$('#voiture2').on('mousedown', afficherVehicule2)
	$('#voiture2').on('mouseup', masquerVehicule2)
	
	$('#voiture3').on('mousedown', afficherVehicule3)
	$('#voiture3').on('mouseup', masquerVehicule3)
	
	$('#voiture4').on('mousedown', afficherVehicule4)
	$('#voiture4').on('mouseup', masquerVehicule4)
	
	$('#voiture5').on('mousedown', afficherVehicule5)
	$('#voiture5').on('mouseup', masquerVehicule5)
	
	$('#voiture6').on('mousedown', afficherVehicule6)
	$('#voiture6').on('mouseup', masquerVehicule6)
	
	$('#voiture7').on('mousedown', afficherVehicule7)
	$('#voiture7').on('mouseup', masquerVehicule7)
	
	$('#voiture8').on('mousedown', afficherVehicule8)
	$('#voiture8').on('mouseup', masquerVehicule8)
	
	$('#voiture9').on('mousedown', afficherVehicule9)
	$('#voiture9').on('mouseup', masquerVehicule9)
	
	$('#voiture10').on('mousedown', afficherVehicule10)
	$('#voiture10').on('mouseup', masquerVehicule10)
	
	$('#voiture11').on('mousedown', afficherVehicule11)
	$('#voiture11').on('mouseup', masquerVehicule11)
	
	$('#voiture12').on('mousedown', afficherVehicule12)
	$('#voiture12').on('mouseup', masquerVehicule12)
	
	$('#voiture13').on('mousedown', afficherVehicule13)
	$('#voiture13').on('mouseup', masquerVehicule13)
	
	$('#voiture14').on('mousedown', afficherVehicule14)
	$('#voiture14').on('mouseup', masquerVehicule14)
	
	$('#voiture15').on('mousedown', afficherVehicule15)
	$('#voiture15').on('mouseup', masquerVehicule15)
	
	$('#voiture16').on('mousedown', afficherVehicule16)
	$('#voiture16').on('mouseup', masquerVehicule16)
	
	$('#voiture17').on('mousedown', afficherVehicule17)
	$('#voiture17').on('mouseup', masquerVehicule17)
	
	$('#voiture18').on('mousedown', afficherVehicule18)
	$('#voiture18').on('mouseup', masquerVehicule18)
	
	$('#voiture19').on('mousedown', afficherVehicule19)
	$('#voiture19').on('mouseup', masquerVehicule19)
	
	$('#voiture20').on('mousedown', afficherVehicule20)
	$('#voiture20').on('mouseup', masquerVehicule20)
	
	$('#voiture21').on('mousedown', afficherVehicule21)
	$('#voiture21').on('mouseup', masquerVehicule21)
	
	$('#voiture22').on('mousedown', afficherVehicule22)
	$('#voiture22').on('mouseup', masquerVehicule22)
	
	$('#voiture23').on('mousedown', afficherVehicule23)
	$('#voiture23').on('mouseup', masquerVehicule23)
	
	$('#voiture24').on('mousedown', afficherVehicule24)
	$('#voiture24').on('mouseup', masquerVehicule24)
	
	$('#voiture25').on('mousedown', afficherVehicule25)
	$('#voiture25').on('mouseup', masquerVehicule25)
	
	$('#voiture26').on('mousedown', afficherVehicule26)
	$('#voiture26').on('mouseup', masquerVehicule26)
	
	$('#voiture27').on('mousedown', afficherVehicule27)
	$('#voiture27').on('mouseup', masquerVehicule27)
	
	$('#voiture28').on('mousedown', afficherVehicule28)
	$('#voiture28').on('mouseup', masquerVehicule28)
	
	$('#voiture29').on('mousedown', afficherVehicule29)
	$('#voiture29').on('mouseup', masquerVehicule29)
	
	$('#voiture30').on('mousedown', afficherVehicule30)
	$('#voiture30').on('mouseup', masquerVehicule30)
	
	$('#voiture31').on('mousedown', afficherVehicule31)
	$('#voiture31').on('mouseup', masquerVehicule31)
	
	$('#voiture32').on('mousedown', afficherVehicule32)
	$('#voiture32').on('mouseup', masquerVehicule32)
	
	$('#voiture33').on('mousedown', afficherVehicule33)
	$('#voiture33').on('mouseup', masquerVehicule33)
	
	$('#voiture34').on('mousedown', afficherVehicule34)
	$('#voiture34').on('mouseup', masquerVehicule34)
	
	$('#voiture35').on('mousedown', afficherVehicule35)
	$('#voiture35').on('mouseup', masquerVehicule35)
	
	$('#voiture36').on('mousedown', afficherVehicule36)
	$('#voiture36').on('mouseup', masquerVehicule36)
	
	$('#voiture37').on('mousedown', afficherVehicule37)
	$('#voiture37').on('mouseup', masquerVehicule37)
	
	$('#voiture38').on('mousedown', afficherVehicule38)
	$('#voiture38').on('mouseup', masquerVehicule38)
	
	$('#voiture39').on('mousedown', afficherVehicule39)
	$('#voiture39').on('mouseup', masquerVehicule39)
	
	$('#voiture40').on('mousedown', afficherVehicule40)
	$('#voiture40').on('mouseup', masquerVehicule40)
	
	$('#voiture41').on('mousedown', afficherVehicule41)
	$('#voiture41').on('mouseup', masquerVehicule41)
	
	$('#voiture42').on('mousedown', afficherVehicule42)
	$('#voiture42').on('mouseup', masquerVehicule42)
	
	$('#voiture43').on('mousedown', afficherVehicule43)
	$('#voiture43').on('mouseup', masquerVehicule43)
	
	$('#voiture44').on('mousedown', afficherVehicule44)
	$('#voiture44').on('mouseup', masquerVehicule44)
	
	$('#voiture45').on('mousedown', afficherVehicule45)
	$('#voiture45').on('mouseup', masquerVehicule45)

	// ATTENTION //
	$('#voiture445').on('mousedown', afficherVehicule045)
	$('#voiture445').on('mouseup', masquerVehicule045)
	
	$('#voiture46').on('mousedown', afficherVehicule46)
	$('#voiture46').on('mouseup', masquerVehicule46)
	
	$('#voiture47').on('mousedown', afficherVehicule47)
	$('#voiture47').on('mouseup', masquerVehicule47)
	
	$('#voiture48').on('mousedown', afficherVehicule48)
	$('#voiture48').on('mouseup', masquerVehicule48)
	
	$('#voiture49').on('mousedown', afficherVehicule49)
	$('#voiture49').on('mouseup', masquerVehicule49)
	
	$('#voiture50').on('mousedown', afficherVehicule50)
	$('#voiture50').on('mouseup', masquerVehicule50)
	
	$('#voiture51').on('mousedown', afficherVehicule51)
	$('#voiture51').on('mouseup', masquerVehicule51)
	
	$('#voiture52').on('mousedown', afficherVehicule52)
	$('#voiture52').on('mouseup', masquerVehicule52)
	
	$('#voiture53').on('mousedown', afficherVehicule53)
	$('#voiture53').on('mouseup', masquerVehicule53)
	
	$('#voiture54').on('mousedown', afficherVehicule54)
	$('#voiture54').on('mouseup', masquerVehicule54)
	
	$('#voiture55').on('mousedown', afficherVehicule55)
	$('#voiture55').on('mouseup', masquerVehicule55)
	
	$('#voiture56').on('mousedown', afficherVehicule56)
	$('#voiture56').on('mouseup', masquerVehicule56)
	
	$('#voiture57').on('mousedown', afficherVehicule57)
	$('#voiture57').on('mouseup', masquerVehicule57)
	
	$('#voiture58').on('mousedown', afficherVehicule58)
	$('#voiture58').on('mouseup', masquerVehicule58)
	
	$('#voiture59').on('mousedown', afficherVehicule59)
	$('#voiture59').on('mouseup', masquerVehicule59)
	
	$('#voiture60').on('mousedown', afficherVehicule60)
	$('#voiture60').on('mouseup', masquerVehicule60)
	
	$('#voiture61').on('mousedown', afficherVehicule61)
	$('#voiture61').on('mouseup', masquerVehicule61)
	
	$('#voiture62').on('mousedown', afficherVehicule62)
	$('#voiture62').on('mouseup', masquerVehicule62)
	
	$('#voiture63').on('mousedown', afficherVehicule63)
	$('#voiture63').on('mouseup', masquerVehicule63)
	
	$('#voiture64').on('mousedown', afficherVehicule64)
	$('#voiture64').on('mouseup', masquerVehicule64)
	
	$('#voiture65').on('mousedown', afficherVehicule65)
	$('#voiture65').on('mouseup', masquerVehicule65)
	
	$('#voiture66').on('mousedown', afficherVehicule66)
	$('#voiture66').on('mouseup', masquerVehicule66)
	
	$('#voiture67').on('mousedown', afficherVehicule67)
	$('#voiture67').on('mouseup', masquerVehicule67)
	
	$('#voiture68').on('mousedown', afficherVehicule68)
	$('#voiture68').on('mouseup', masquerVehicule68)
	
	$('#voiture69').on('mousedown', afficherVehicule69)
	$('#voiture69').on('mouseup', masquerVehicule69)
	
	$('#voiture70').on('mousedown', afficherVehicule70)
	$('#voiture70').on('mouseup', masquerVehicule70)
	
	$('#voiture71').on('mousedown', afficherVehicule71)
	$('#voiture71').on('mouseup', masquerVehicule71)
	
	$('#voiture72').on('mousedown', afficherVehicule72)
	$('#voiture72').on('mouseup', masquerVehicule72)
	
	$('#voiture73').on('mousedown', afficherVehicule73)
	$('#voiture73').on('mouseup', masquerVehicule73)
	
	$('#voiture74').on('mousedown', afficherVehicule74)
	$('#voiture74').on('mouseup', masquerVehicule74)
	
	$('#voiture75').on('mousedown', afficherVehicule75)
	$('#voiture75').on('mouseup', masquerVehicule75)
	
	$('#voiture76').on('mousedown', afficherVehicule76)
	$('#voiture76').on('mouseup', masquerVehicule76)
	
	$('#voiture77').on('mousedown', afficherVehicule77)
	$('#voiture77').on('mouseup', masquerVehicule77)
	
	$('#voiture78').on('mousedown', afficherVehicule78)
	$('#voiture78').on('mouseup', masquerVehicule78)
	
	$('#voiture79').on('mousedown', afficherVehicule79)
	$('#voiture79').on('mouseup', masquerVehicule79)
	
	$('#voiture80').on('mousedown', afficherVehicule80)
	$('#voiture80').on('mouseup', masquerVehicule80)
	
	$('#voiture81').on('mousedown', afficherVehicule81)
	$('#voiture81').on('mouseup', masquerVehicule81)
	
	$('#voiture82').on('mousedown', afficherVehicule82)
	$('#voiture82').on('mouseup', masquerVehicule82)
	
	$('#voiture83').on('mousedown', afficherVehicule83)
	$('#voiture83').on('mouseup', masquerVehicule83)
	
	$('#voiture84').on('mousedown', afficherVehicule84)
	$('#voiture84').on('mouseup', masquerVehicule84)
	
	$('#voiture85').on('mousedown', afficherVehicule85)
	$('#voiture85').on('mouseup', masquerVehicule85)
	
	$('#voiture86').on('mousedown', afficherVehicule86)
	$('#voiture86').on('mouseup', masquerVehicule86)
	
	$('#voiture87').on('mousedown', afficherVehicule87)
	$('#voiture87').on('mouseup', masquerVehicule87)
	
	$('#voiture88').on('mousedown', afficherVehicule88)
	$('#voiture88').on('mouseup', masquerVehicule88)
	
	$('#voiture89').on('mousedown', afficherVehicule89)
	$('#voiture89').on('mouseup', masquerVehicule89)
	
	$('#voiture90').on('mousedown', afficherVehicule90)
	$('#voiture90').on('mouseup', masquerVehicule90)
	
	$('#voiture91').on('mousedown', afficherVehicule91)
	$('#voiture91').on('mouseup', masquerVehicule91)
	
	$('#voiture92').on('mousedown', afficherVehicule92)
	$('#voiture92').on('mouseup', masquerVehicule92)
	
	$('#voiture93').on('mousedown', afficherVehicule93)
	$('#voiture93').on('mouseup', masquerVehicule93)
	
	$('#voiture94').on('mousedown', afficherVehicule94)
	$('#voiture94').on('mouseup', masquerVehicule94)
	
	$('#voiture95').on('mousedown', afficherVehicule95)
	$('#voiture95').on('mouseup', masquerVehicule95)
	
	$('#voiture96').on('mousedown', afficherVehicule96)
	$('#voiture96').on('mouseup', masquerVehicule96)
	
	$('#voiture97').on('mousedown', afficherVehicule97)
	$('#voiture97').on('mouseup', masquerVehicule97)
	
	$('#voiture98').on('mousedown', afficherVehicule98)
	$('#voiture98').on('mouseup', masquerVehicule98)
	
	$('#voiture99').on('mousedown', afficherVehicule99)
	$('#voiture99').on('mouseup', masquerVehicule99)
	
	$('#voiture100').on('mousedown', afficherVehicule100)
	$('#voiture100').on('mouseup', masquerVehicule100)
	
	$('#voiture101').on('mousedown', afficherVehicule101)
	$('#voiture101').on('mouseup', masquerVehicule101)
	
	$('#voiture102').on('mousedown', afficherVehicule102)
	$('#voiture102').on('mouseup', masquerVehicule102)
	
	$('#voiture103').on('mousedown', afficherVehicule103)
	$('#voiture103').on('mouseup', masquerVehicule103)
	
	$('#voiture104').on('mousedown', afficherVehicule104)
	$('#voiture104').on('mouseup', masquerVehicule104)
	
	$('#voiture105').on('mousedown', afficherVehicule105)
	$('#voiture105').on('mouseup', masquerVehicule105)
	
	$('#voiture106').on('mousedown', afficherVehicule106)
	$('#voiture106').on('mouseup', masquerVehicule106)
	
	$('#voiture107').on('mousedown', afficherVehicule107)
	$('#voiture107').on('mouseup', masquerVehicule107)
	
	$('#voiture108').on('mousedown', afficherVehicule108)
	$('#voiture108').on('mouseup', masquerVehicule108)
	
	$('#voiture109').on('mousedown', afficherVehicule109)
	$('#voiture109').on('mouseup', masquerVehicule109)
	
	$('#voiture110').on('mousedown', afficherVehicule110)
	$('#voiture110').on('mouseup', masquerVehicule110)
	
	$('#voiture111').on('mousedown', afficherVehicule111)
	$('#voiture111').on('mouseup', masquerVehicule111)
	
	$('#voiture112').on('mousedown', afficherVehicule112)
	$('#voiture112').on('mouseup', masquerVehicule112)
	
	$('#voiture113').on('mousedown', afficherVehicule113)
	$('#voiture113').on('mouseup', masquerVehicule113)
	
	$('#voiture114').on('mousedown', afficherVehicule114)
	$('#voiture114').on('mouseup', masquerVehicule114)
	
	$('#voiture115').on('mousedown', afficherVehicule115)
	$('#voiture115').on('mouseup', masquerVehicule115)
	
	$('#voiture116').on('mousedown', afficherVehicule116)
	$('#voiture116').on('mouseup', masquerVehicule116)
})//Fin du DOM

function afficherVehicule1(){
	$('#1').show()
}
function masquerVehicule1(){
	$('#1').hide()
}
function afficherVehicule2(){
	$('#2').show()
}
function masquerVehicule2(){
	$('#2').hide()
}
function afficherVehicule3(){
	$('#3').show()
}
function masquerVehicule3(){
	$('#3').hide()
}

function afficherVehicule4(){
	$('#4').show()
}
function masquerVehicule4(){
	$('#4').hide()
}

function afficherVehicule5(){
	$('#5').show()
}
function masquerVehicule5(){
	$('#5').hide()
}

function afficherVehicule6(){
	$('#6').show()
}
function masquerVehicule6(){
	$('#6').hide()
}

function afficherVehicule7(){
	$('#7').show()
}
function masquerVehicule7(){
	$('#7').hide()
}

function afficherVehicule8(){
	$('#8').show()
}
function masquerVehicule8(){
	$('#8').hide()
}

function afficherVehicule9(){
	$('#9').show()
}
function masquerVehicule9(){
	$('#9').hide()
}

function afficherVehicule10(){
	$('#10').show()
}
function masquerVehicule10(){
	$('#10').hide()
}

function afficherVehicule11(){
	$('#11').show()
}
function masquerVehicule11(){
	$('#11').hide()
}

function afficherVehicule12(){
	$('#12').show()
}
function masquerVehicule12(){
	$('#12').hide()
}

function afficherVehicule13(){
	$('#13').show()
}
function masquerVehicule13(){
	$('#13').hide()
}

function afficherVehicule14(){
	$('#14').show()
}
function masquerVehicule14(){
	$('#14').show()
}

function afficherVehicule15(){
	$('#15').show()
}
function masquerVehicule15(){
	$('#15').hide()
}

function afficherVehicule16(){
	$('#16').show()
}
function masquerVehicule16(){
	$('#16').hide()
}

function afficherVehicule17(){
	$('#17').show()
}
function masquerVehicule17(){
	$('#17').hide()
}

function afficherVehicule18(){
	$('#18').show()
}
function masquerVehicule18(){
	$('#18').hide()
}

function afficherVehicule19(){
	$('#19').show()
}
function masquerVehicule19(){
	$('#19').hide()
}

function afficherVehicule20(){
	$('#20').show()
}
function masquerVehicule20(){
	$('#20').hide()
}

function afficherVehicule21(){
	$('#21').show()
}
function masquerVehicule21(){
	$('#21').hide()
}

function afficherVehicule22(){
	$('#22').show()
}
function masquerVehicule22(){
	$('#22').hide()
}

function afficherVehicule23(){
	$('#23').show()
}
function masquerVehicule23(){
	$('#23').hide()
}

function afficherVehicule24(){
	$('#24').show()
}
function masquerVehicule24(){
	$('#24').hide()
}

function afficherVehicule25(){
	$('#25').show()
}
function masquerVehicule25(){
	$('#25').hide()
}

function afficherVehicule26(){
	$('#26').show()
}
function masquerVehicule26(){
	$('#26').hide()
}

function afficherVehicule27(){
	$('#27').show()
}
function masquerVehicule27(){
	$('#27').hide()
}

function afficherVehicule28(){
	$('#28').show()
}
function masquerVehicule28(){
	$('#28').hide()
}

function afficherVehicule29(){
	$('#29').show()
}
function masquerVehicule29(){
	$('#29').hide()
}

function afficherVehicule30(){
	$('#30').show()
}
function masquerVehicule30(){
	$('#30').hide()
}

function afficherVehicule31(){
	$('#31').show()
}
function masquerVehicule31(){
	$('#31').hide()
}

function afficherVehicule32(){
	$('#32').show()
}
function masquerVehicule32(){
	$('#32').hide()
}

function afficherVehicule33(){
	$('#33').show()
}
function masquerVehicule33(){
	$('#33').hide()
}

function afficherVehicule34(){
	$('#34').show()
}
function masquerVehicule34(){
	$('#34').hide()
}

function afficherVehicule35(){
	$('#35').show()
}
function masquerVehicule35(){
	$('#35').hide()
}

function afficherVehicule36(){
	$('#36').show()
}
function masquerVehicule36(){
	$('#36').hide()
}

function afficherVehicule37(){
	$('#37').show()
}
function masquerVehicule37(){
	$('#37').hide()
}

function afficherVehicule38(){
	$('#38').show()
}
function masquerVehicule38(){
	$('#38').hide()
}

function afficherVehicule39(){
	$('#39').show()
}
function masquerVehicule39(){
	$('#39').hide()
}

function afficherVehicule40(){
	$('#40').show()
}
function masquerVehicule40(){
	$('#40').hide()
}

function afficherVehicule41(){
	$('#41').show()
}
function masquerVehicule41(){
	$('#41').hide()
}

function afficherVehicule42(){
	$('#42').show()
}
function masquerVehicule42(){
	$('#42').hide()
}

function afficherVehicule43(){
	$('#43').show()
}
function masquerVehicule43(){
	$('#43').hide()
}

function afficherVehicule44(){
	$('#44').show()
}
function masquerVehicule44(){
	$('#44').hide()
}

function afficherVehicule45(){
	$('#45').show()
}
function masquerVehicule45(){
	$('#45').hide()
}

function afficherVehicule045(){
	$('#445').show()
}
function masquerVehicule045(){
	$('#445').hide()
}

function afficherVehicule46(){
	$('#46').show()
}
function masquerVehicule46(){
	$('#46').hide()
}

function afficherVehicule47(){
	$('#47').show()
}
function masquerVehicule47(){
	$('#47').hide()
}

function afficherVehicule48(){
	$('#48').show()
}
function masquerVehicule48(){
	$('#48').hide()
}

function afficherVehicule49(){
	$('#49').show()
}
function masquerVehicule49(){
	$('#49').hide()
}

function afficherVehicule50(){
	$('#50').show()
}
function masquerVehicule50(){
	$('#50').hide()
}

function afficherVehicule51(){
	$('#51').show()
}
function masquerVehicule51(){
	$('#51').hide()
}

function afficherVehicule52(){
	$('#52').show()
}
function masquerVehicule52(){
	$('#52').hide()
}

function afficherVehicule53(){
	$('#53').show()
}
function masquerVehicule53(){
	$('#53').hide()
}

function afficherVehicule54(){
	$('#54').show()
}
function masquerVehicule54(){
	$('#54').hide()
}

function afficherVehicule55(){
	$('#55').show()
}
function masquerVehicule55(){
	$('#55').hide()
}

function afficherVehicule56(){
	$('#56').show()
}
function masquerVehicule56(){
	$('#56').hide()
}

function afficherVehicule57(){
	$('#57').show()
}
function masquerVehicule57(){
	$('#57').hide()
}

function afficherVehicule58(){
	$('#58').show()
}
function masquerVehicule58(){
	$('#58').hide()
}

function afficherVehicule59(){
	$('#59').show()
}
function masquerVehicule59(){
	$('#59').hide()
}

function afficherVehicule60(){
	$('#60').show()
}
function masquerVehicule60(){
	$('#60').hide()
}

function afficherVehicule61(){
	$('#61').show()
}
function masquerVehicule61(){
	$('#61').hide()
}

function afficherVehicule62(){
	$('#62').show()
}
function masquerVehicule62(){
	$('#62').hide()
}

function afficherVehicule63(){
	$('#63').show()
}
function masquerVehicule63(){
	$('#63').hide()
}

function afficherVehicule64(){
	$('#64').show()
}
function masquerVehicule64(){
	$('#64').hide()
}

function afficherVehicule65(){
	$('#65').show()
}
function masquerVehicule65(){
	$('#65').hide()
}

function afficherVehicule66(){
	$('#66').show()
}
function masquerVehicule66(){
	$('#66').hide()
}

function afficherVehicule67(){
	$('#67').show()
}
function masquerVehicule67(){
	$('#67').hide()
}

function afficherVehicule68(){
	$('#68').show()
}
function masquerVehicule68(){
	$('#68').hide()
}

function afficherVehicule69(){
	$('#69').show()
}
function masquerVehicule69(){
	$('#69').hide()
}

function afficherVehicule70(){
	$('#70').show()
}
function masquerVehicule70(){
	$('#70').hide()
}

function afficherVehicule71(){
	$('#71').show()
}
function masquerVehicule71(){
	$('#71').hide()
}

function afficherVehicule72(){
	$('#72').show()
}
function masquerVehicule72(){
	$('#72').hide()
}

function afficherVehicule73(){
	$('#73').show()
}
function masquerVehicule73(){
	$('#73').hide()
}

function afficherVehicule74(){
	$('#74').show()
}
function masquerVehicule74(){
	$('#74').hide()
}

function afficherVehicule75(){
	$('#75').show()
}
function masquerVehicule75(){
	$('#75').hide()
}

function afficherVehicule76(){
	$('#76').show()
}
function masquerVehicule76(){
	$('#76').hide()
}

function afficherVehicule77(){
	$('#77').show()
}
function masquerVehicule77(){
	$('#77').hide()
}

function afficherVehicule78(){
	$('#78').show()
}
function masquerVehicule78(){
	$('#78').hide()
}

function afficherVehicule79(){
	$('#79').show()
}
function masquerVehicule79(){
	$('#79').hide()
}

function afficherVehicule80(){
	$('#80').show()
}
function masquerVehicule80(){
	$('#80').hide()
}

function afficherVehicule81(){
	$('#81').show()
}
function masquerVehicule81(){
	$('#81').hide()
}

function afficherVehicule82(){
	$('#82').show()
}
function masquerVehicule82(){
	$('#82').hide()
}

function afficherVehicule83(){
	$('#83').show()
}
function masquerVehicule83(){
	$('#83').hide()
}

function afficherVehicule84(){
	$('#84').show()
}
function masquerVehicule84(){
	$('#84').hide()
}

function afficherVehicule85(){
	$('#85').show()
}
function masquerVehicule85(){
	$('#85').hide()
}

function afficherVehicule86(){
	$('#86').show()
}
function masquerVehicule86(){
	$('#86').hide()
}

function afficherVehicule87(){
	$('#87').show()
}
function masquerVehicule87(){
	$('#87').hide()
}

function afficherVehicule88(){
	$('#88').show()
}
function masquerVehicule88(){
	$('#88').hide()
}

function afficherVehicule89(){
	$('#89').show()
}
function masquerVehicule89(){
	$('#89').hide()
}

function afficherVehicule90(){
	$('#90').show()
}
function masquerVehicule90(){
	$('#90').hide()
}

function afficherVehicule91(){
	$('#91').show()
}
function masquerVehicule91(){
	$('#91').hide()
}

function afficherVehicule92(){
	$('#92').show()
}
function masquerVehicule92(){
	$('#92').hide()
}

function afficherVehicule93(){
	$('#93').show()
}
function masquerVehicule93(){
	$('#93').hide()
}

function afficherVehicule94(){
	$('#94').show()
}
function masquerVehicule94(){
	$('#94').hide()
}

function afficherVehicule95(){
	$('#95').show()
}
function masquerVehicule95(){
	$('#95').hide()
}

function afficherVehicule96(){
	$('#96').show()
}
function masquerVehicule96(){
	$('#96').hide()
}

function afficherVehicule97(){
	$('#97').show()
}
function masquerVehicule97(){
	$('#97').hide()
}

function afficherVehicule98(){
	$('#98').show()
}
function masquerVehicule98(){
	$('#98').hide()
}

function afficherVehicule99(){
	$('#99').show()
}
function masquerVehicule99(){
	$('#99').hide()
}

function afficherVehicule100(){
	$('#100').show()
}
function masquerVehicule100(){
	$('#100').hide()
}

function afficherVehicule101(){
	$('#101').show()
}
function masquerVehicule101(){
	$('#101').hide()
}

function afficherVehicule102(){
	$('#102').show()
}
function masquerVehicule102(){
	$('#102').hide()
}

function afficherVehicule103(){
	$('#103').show()
}
function masquerVehicule103(){
	$('#103').hide()
}

function afficherVehicule104(){
	$('#104').show()
}
function masquerVehicule104(){
	$('#104').hide()
}

function afficherVehicule105(){
	$('#105').show()
}
function masquerVehicule105(){
	$('#105').hide()
}

function afficherVehicule106(){
	$('#106').show()
}
function masquerVehicule106(){
	$('#106').hide()
}

function afficherVehicule107(){
	$('#107').show()
}
function masquerVehicule107(){
	$('#107').hide()
}

function afficherVehicule108(){
	$('#108').show()
}
function masquerVehicule108(){
	$('#108').hide()
}

function afficherVehicule109(){
	$('#109').show()
}
function masquerVehicule109(){
	$('#109').hide()
}

function afficherVehicule110(){
	$('#110').show()
}
function masquerVehicule110(){
	$('#110').hide()
}

function afficherVehicule111(){
	$('#111').show()
}
function masquerVehicule111(){
	$('#111').hide()
}

function afficherVehicule112(){
	$('#112').show()
}
function masquerVehicule112(){
	$('#112').hide()
}

function afficherVehicule113(){
	$('#113').show()
}
function masquerVehicule113(){
	$('#113').hide()
}

function afficherVehicule114(){
	$('#114').show()
}
function masquerVehicule114(){
	$('#114').hide()
}

function afficherVehicule115(){
	$('#115').show()
}
function masquerVehicule115(){
	$('#115').hide()
}

function afficherVehicule116(){
	$('#116').show()
}
function masquerVehicule116(){
	$('#116').hide()
}