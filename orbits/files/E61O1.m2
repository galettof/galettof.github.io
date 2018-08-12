--This file was prepared by Federico Galetto using Macaulay2. Contact the author at galetto.federico [(AT)] gmail.com for questions, comments or bug reports.

A=QQ[x_{}, x_12, x_13, x_23, x_14, x_24, x_34, x_15, x_25, x_35, x_45, x_1234, x_1235, x_1245, x_1345, x_2345]

I1=ideal(x_{}*x_1234-x_12*x_34+x_13*x_24-x_14*x_23,x_{}*x_1235-x_12*x_35+x_13*x_25-x_15*x_23,x_{}*x_1245-x_12*x_45+x_14*x_25-x_15*x_24,x_{}*x_1345-x_13*x_45+x_14*x_35-x_15*x_34,x_{}*x_2345-x_23*x_45+x_24*x_35-x_25*x_34,x_12*x_1345-x_13*x_1245+x_14*x_1235-x_15*x_1234,-x_12*x_2345+x_23*x_1245-x_24*x_1235+x_25*x_1234,x_13*x_2345-x_23*x_1345+x_34*x_1235-x_35*x_1234,-x_14*x_2345+x_24*x_1345-x_34*x_1245+x_45*x_1234,x_15*x_2345-x_25*x_1345+x_35*x_1245-x_45*x_1235)