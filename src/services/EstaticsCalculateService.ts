import { funcaoCalculoFr_Para_fi, funcaoCalculo_fi_para_alfa, funcao_Para_FrAC, funcao_Para_frAC, funcao_Para_K, funcao_Para_At} from '../funcs/EstatisticFunc';


class EstaticsCalculateService 
{
    

    async execute(hated: number, disliked: number ,indifferent: number, like: number,  love: number)
    {
    //Generated by typescript 1.8.10
    var Frs = new Array(5);
    Frs[0] = hated;
    Frs[1] = disliked;
    Frs[2] = indifferent;
    Frs[3] = like;
    Frs[4] = love;



   const N = Frs[0] + Frs[1] + Frs[2] + Frs[3] + Frs[4];

   var FrResultadoP_fi = new Array(5);
   for (var i = 0; i < FrResultadoP_fi.length; i++) {

    FrResultadoP_fi[i] = funcaoCalculoFr_Para_fi(Frs[i],N);

   }

   var AlfaResultado = new Array(5);
    for (var  i = 0; i < AlfaResultado.length; i++) {
   
        AlfaResultado[i] = funcaoCalculo_fi_para_alfa( FrResultadoP_fi[i]);
    }
   
    var Resultadofuncao_Para_FrAC = new Array(5);
    Resultadofuncao_Para_FrAC[0] =  funcao_Para_FrAC(0,Frs[0]);

    var x = 0;
    for (var  i = 1; i < Resultadofuncao_Para_FrAC.length; i++) {
   
        Resultadofuncao_Para_FrAC[i] =  funcao_Para_FrAC(Frs[i], Resultadofuncao_Para_FrAC[x]);
        x++;
    }
    
    var Resultadofuncao_Para_fiAC = new Array(5); 
   Resultadofuncao_Para_fiAC[0] =  funcao_Para_frAC(0,FrResultadoP_fi[0]);
   Resultadofuncao_Para_fiAC[1] =  funcao_Para_frAC(FrResultadoP_fi[1], Resultadofuncao_Para_fiAC[0]);
   Resultadofuncao_Para_fiAC[2] =  funcao_Para_frAC(FrResultadoP_fi[2], Resultadofuncao_Para_fiAC[1]);
   Resultadofuncao_Para_fiAC[3] =  funcao_Para_frAC(FrResultadoP_fi[3], Resultadofuncao_Para_fiAC[2]);
   Resultadofuncao_Para_fiAC[4] =  funcao_Para_frAC(FrResultadoP_fi[4], Resultadofuncao_Para_fiAC[3]);

  
    let SampleData = 
        { 
         N: N,
         FrHated: Frs[0],
         FrDisliked: Frs[1],
         FrIndifferent: Frs[2],
         FrLike: Frs[3],
         FrLove: Frs[4],
     
         FrAcHated: Resultadofuncao_Para_FrAC[0],
         FrAcDisliked: Resultadofuncao_Para_FrAC[1],
         FrAcIndifferent: Resultadofuncao_Para_FrAC[2],
         FrAcLike: Resultadofuncao_Para_FrAC[3],
         FrAcLove: Resultadofuncao_Para_FrAC[4],

         FiHated: FrResultadoP_fi[0],
         FiDisliked: FrResultadoP_fi[1],
         FiIndifferent: FrResultadoP_fi[2],
         FiLike: FrResultadoP_fi[3],
         FiLove: FrResultadoP_fi[4],

         FiAcHated: Resultadofuncao_Para_fiAC[0],
         FiAcDisliked: Resultadofuncao_Para_fiAC[1],
         FiAcIndifferent: Resultadofuncao_Para_fiAC[2],
         FiAcLike: Resultadofuncao_Para_fiAC[3],
         FiAcLove: Resultadofuncao_Para_fiAC[4],

         AlfaHated: AlfaResultado[0],
         AlfaDisliked: AlfaResultado[1],
         AlfaIndifferent: AlfaResultado[2],
         AlfaLike: AlfaResultado[3],
         AlfaLove: AlfaResultado[4],


        };

        console.log(SampleData)

    return SampleData;

    }
}

export default new EstaticsCalculateService();