import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateCurves implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    try {
      await connection.query(`insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0, -1.26582278481014, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.40041067761807, -1.47679324894516, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.418891170431211, -0.421940928270047, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.433264887063655, -2.53164556962025, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.449691991786448, 8.22784810126582, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.462012320328542, 13.7130801687764, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.480492813141684, 20.042194092827, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.501026694045174, 25.9493670886076, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.519507186858316, 29.3248945147679, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.540041067761807, 31.8565400843882, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.570841889117043, 33.5443037974684, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.605749486652977, 35.0210970464135, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.642710472279261, 35.6540084388186, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.743326488706365, 35.6540084388186, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.835728952772074, 36.0759493670886, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.848049281314168, 35.0210970464135, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.856262833675564, 31.0126582278481, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.862422997946612, 25.1054852320675, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.874743326488706, 17.9324894514768, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.893223819301848, 10.337552742616, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.915811088295688, 5.06329113924051, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.938398357289528, 1.26582278481013, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.971252566735113, -0.632911392405077, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (1, -1.47679324894516, 1, 3, 1);`);

      await connection.query(`insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.0436117605231687, 54.1380453834857, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.142944871200939,	79.1536569924935, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.252211292946487, 76.0763396913854, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.361477714692035, 68.7304854887402, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.470744136437582, 70.8151197894909, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.58001055818313, 70.1202416892407, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.689276979928678, 60.5904848858091, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.798543401674226, 47.2885326810193, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.907809823419773, 39.6448735782669, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.982309656428102, 34.4829219764081, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0, 44.2583732057416, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.0228509249183895, 49.7607655502392, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.0587595212187159, 56.6985645933014, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.0663764961915125, 61.2440191387559, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.0772578890097932, 64.5933014354067, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.0826985854189336, 67.9425837320574, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.0990206746463547, 70.0956937799043, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.106637649619151, 73.2057416267942, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.114254624591947, 75.8373205741626, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.117519042437431, 79.4258373205741, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.128400435255712, 79.1866028708134, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.151251360174102, 83.0143540669856, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.178454842219804, 84.2105263157894, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.164309031556039, 84.9282296650717, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.196953210010881, 84.688995215311, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.204570184983677, 82.0574162679425, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.20892274211099, 81.1004784688995, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.226332970620239, 81.1004784688995, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.239390642002176, 78.9473684210526, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.266594124047878, 72.7272727272727, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.269858541893362, 71.5311004784689, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.291621327529923, 72.2488038277512, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.314472252448313, 72.0095693779904, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.325353645266594, 68.4210526315789, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.346028291621327, 68.1818181818181, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.393906420021762, 68.4210526315789, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.429815016322089, 68.4210526315789, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.442872687704026, 70.5741626794258, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.525571273122959, 70.5741626794258, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.596300326441784, 68.4210526315789, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.614798694232861, 68.4210526315789, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.630032644178455, 68.1818181818181, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.640914036996735, 65.7894736842105, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.659412404787812, 64.8325358851674, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.669205658324265, 64.8325358851674, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.67791077257889, 62.9186602870813, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.708378672470076, 58.3732057416267, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.727965179542981, 55.9808612440191, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.743199129488574, 54.066985645933, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.761697497279651, 51.1961722488038, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.782372143634385, 49.0430622009569, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.823721436343852, 46.1722488038277, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.834602829162132, 44.0191387559808, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.862894450489662, 43.0622009569378, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.885745375408052, 40.6698564593301, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.930359085963003, 39.2344497607655, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.947769314472252, 36.8421052631579, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.964091403699673, 34.9282296650717, 1, 2, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.997823721436343, 35.645933014354, 1, 2, 1);`);

      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
