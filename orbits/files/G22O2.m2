--This file was prepared by Federico Galetto using Macaulay2. Contact the author at galetto.federico [(AT)] gmail.com for questions, comments or bug reports.

A=QQ[x_111, x_112, x_122, x_222]

I2=ideal(6*x_112^2*x_122^2-8*x_111*x_122^3-8*x_112^3*x_222+12*x_111*x_112*x_122*x_222-2*x_111^2*x_222^2)

N2=cokernel map(A^{{-1},{-1},{0}},A^{{-2},{-2},{-2}},{{2*x_112, 2*x_122, 2*x_222}, {-2*x_111, -2*x_112, -2*x_122}, {-4*x_112^2+4*x_111*x_122, -2*x_112*x_122+2*x_111*x_222, -4*x_122^2+4*x_112*x_222}})

C2=cokernel map(A^{{-1},{-1}},A^{{-2},{-2},{-2}},{{2*x_112, 2*x_122, 2*x_222}, {-2*x_111, -2*x_112, -2*x_122}})
