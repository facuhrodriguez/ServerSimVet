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

      await connection.query(`INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (-0.000406417868249926, 58.4107694003527, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0180001884836491, 60.3053350970017, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0272034916595985, 62.7166005291005, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0345661342003581, 65.644565696649, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0419287767411177, 68.2280643738977, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0456100980114975, 71.8449625220458, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0492914192818773, 75.1173941798942, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0511320799170672, 77.8731261022928, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.054813401187447, 80.2843915343915, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0603353830930167, 82.5234237213404, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0658573649985864, 85.7958553791887, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0695386862689662, 89.4127535273368, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0713793469041561, 95.4409171075838, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0805826500801056, 99.9189814814815, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0842639713504854, 104.224812610229, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.0897859532560551, 109.564043209877, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.108192559607954, 117.486772486772, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.126599165959853, 120.070271164021, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.148687093582132, 117.831238977072, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.159731057393271, 114.731040564374, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.170775021204411, 111.630842151675, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.191022288191499, 108.358410493827, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.202066252002639, 103.70811287478, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.214950876448968, 100.263447971781, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.224154179624918, 97.8521825396825, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.237038804071247, 94.5797508818342, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.251764089152766, 91.135085978836, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.262808052963905, 89.068287037037, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.277533338045425, 85.6236221340388, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.306983908208463, 83.9012896825397, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.35300042408821, 84.0735229276896, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.402698261238338, 85.279155643739, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.450555437753275, 82.3511904761905, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.483687329186693, 80.8010912698413, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.513137899349732, 77.7008928571428, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.54258846951277, 75.461860670194, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.586764324757327, 72.8783619929453, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.625418198096315, 71.500496031746, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.671434713976063, 69.9503968253968, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.71745122985581, 67.8835978835979, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.757945763829988, 66.1612654320987, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.789236994628216, 65.3000992063492, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.837094171143154, 63.75, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.89415465083404, 62.3721340388007, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (0.958577773065687, 60.9942680776014, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);
            INSERT INTO simvet.ppcurve (t, value, created_at, updated_at, id_as, id_pp, id_scenario) VALUES (1.00091296767505, 60.3053350970017, '2021-05-13 12:03:11.845378', '2021-05-13 12:03:11.845378', 1, 1, 1);`)



      // let sinValue: number;
      // let cosValue: number;
      // for (let i: number = 0.00; i < 1.0; i += 0.01) {
      //   sinValue = Math.sin(i + 45);
      //   cosValue = Math.cos(i + 45);
      //   await connection.query(`insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (${i}, ${sinValue}, 1, 1, 1); `)
      //   // await connection.query(`insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (${i}, ${cosValue}, 1, 4, 1); `)

      // }
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
