"use strict";var badPattern="`![]?{}=*;><^%$#`~=|/",firstName$1=["Donald","Chester","Peter","Campbell","Jack","Denis","Hugo","Simpson","Mary","Patricia","Linda","Barbara","Elizabeth","Jennifer","Maria","Susan","Margaret","Dorothy","Lisa","Nancy","Karen","Betty","Helen","Sandra","Donna","Carol","Ruth","Sharon","Michelle","Laura","Sarah","Kimberly","Deborah","Jessica","Shirley","Cynthia","Angela","Melissa","Brenda","Amy","Anna","Rebecca","Virginia","Kathleen","Pamela","Martha","Debra","Amanda","Stephanie","Carolyn","Christine","Marie","Janet","Catherine","Frances","Ann","Joyce","Diane","Alice","Julie","Heather","Teresa","Doris","Gloria","Evelyn","Jean","Cheryl","Mildred","Katherine","Joan","Ashley","Judith","Rose","Janice","Kelly","Nicole","Judy","Christina","Kathy","Theresa","Beverly","Denise","Tammy","Irene","Jane","Lori","Rachel","Marilyn","Andrea","Kathryn","Louise","Sara","Anne","Jacqueline","Wanda","Bonnie","Julia","Ruby","Lois"],secondName$1=["Donald","Chester","Peter","Campbell","Jack","Denis","Hugo","Simpson","Mary","Patricia","Linda","Barbara","Elizabeth","Jennifer","Maria","Susan","Margaret","Dorothy","Lisa","Nancy","Karen","Betty","Helen","Sandra","Donna","Carol","Ruth","Sharon","Michelle","Laura","Sarah","Kimberly","Deborah","Jessica","Shirley","Cynthia","Angela","Melissa","Brenda","Amy","Anna","Rebecca","Virginia","Kathleen","Pamela","Martha","Debra","Amanda","Stephanie","Carolyn","Christine","Marie","Janet","Catherine","Frances","Ann","Joyce","Diane","Alice","Julie","Heather","Teresa","Doris","Gloria","Evelyn","Jean","Cheryl","Mildred","Katherine","Joan","Ashley","Judith","Rose","Janice","Kelly","Nicole","Judy","Christina","Kathy","Theresa","Beverly","Denise","Tammy","Irene","Jane","Lori","Rachel","Marilyn","Andrea","Kathryn","Louise","Sara","Anne","Jacqueline","Wanda","Bonnie","Julia","Ruby","Lois"],name=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:badPattern,a="",r=function(e,a){return Math.floor(Math.random()*(a-e+1))+e};return(a=firstName$1[r(0,100)]+secondName$1[r(0,100)]).replace(a.charAt(r(0,a.length)),e.charAt(r(0,e.length)))},emailDomens=["mail.ru","tut.by","yandex.ru","ok.ru","zmail.ru","ru.ru","hotmail.ru","gmail.com","usa.net","lenta.ru","rambler.ru","outlookmail.com","mailcity.com","newmail.net","yahoo.com","iname.com","bigfoot.com","apexmail.com"],email=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:badPattern,a="",r=function(e,a){return Math.floor(Math.random()*(a-e+1))+e};return(a=(a=firstName$1[r(0,100)]+secondName$1[r(0,100)]).replace(a.charAt(r(0,a.length)),e.charAt(r(0,e.length))))+"@"+emailDomens[r(0,25)]},phone=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:375,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:8,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:badPattern,n=[],i=function(e,a){return Math.floor(Math.random()*(a-e+1))+e};n.push(e);for(var t=0;t<a;t++)n.push(i(0,9));return(n=n.join("")).replace(n.charAt(i(0,n.length)),r.charAt(i(0,r.length)))},text$1="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",text=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:500,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:badPattern,r=text$1.substring(0,e),n=function(e,a){return Math.floor(Math.random()*(a-e+1))+e};return r.replace(r.charAt(n(0,r.length)),a.charAt(n(0,a.length)))},badGen={name:name,email:email,phone:phone,text:text};module.exports=badGen;