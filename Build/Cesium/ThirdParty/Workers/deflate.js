!(function (e) {
  var h = 15,
    dt = 256,
    p = 573,
    st = 256,
    lt = -2,
    ct = -5,
    n = [
      0,
      1,
      2,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      0,
      0,
      16,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      22,
      22,
      22,
      22,
      22,
      22,
      22,
      22,
      23,
      23,
      23,
      23,
      23,
      23,
      23,
      23,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
    ];
  function ht() {
    var c = this;
    function u(t, e, n) {
      for (var a, i, r = [], _ = 0, o = 1; o <= h; o++)
        r[o] = _ = (_ + n[o - 1]) << 1;
      for (a = 0; a <= e; a++)
        0 !== (i = t[2 * a + 1]) &&
          (t[2 * a] = (function (t, e) {
            for (var n = 0; (n |= 1 & t), (t >>>= 1), (n <<= 1), 0 < --e; );
            return n >>> 1;
          })(r[i]++, i));
    }
    c.build_tree = function (t) {
      var e,
        n,
        a,
        i = c.dyn_tree,
        r = c.stat_desc.static_tree,
        _ = c.stat_desc.elems,
        o = -1;
      for (t.heap_len = 0, t.heap_max = p, e = 0; e < _; e++)
        0 !== i[2 * e]
          ? ((t.heap[++t.heap_len] = o = e), (t.depth[e] = 0))
          : (i[2 * e + 1] = 0);
      for (; t.heap_len < 2; )
        (i[2 * (a = t.heap[++t.heap_len] = o < 2 ? ++o : 0)] = 1),
          (t.depth[a] = 0),
          t.opt_len--,
          r && (t.static_len -= r[2 * a + 1]);
      for (c.max_code = o, e = Math.floor(t.heap_len / 2); 1 <= e; e--)
        t.pqdownheap(i, e);
      for (
        a = _;
        (e = t.heap[1]),
          (t.heap[1] = t.heap[t.heap_len--]),
          t.pqdownheap(i, 1),
          (n = t.heap[1]),
          (t.heap[--t.heap_max] = e),
          (t.heap[--t.heap_max] = n),
          (i[2 * a] = i[2 * e] + i[2 * n]),
          (t.depth[a] = Math.max(t.depth[e], t.depth[n]) + 1),
          (i[2 * e + 1] = i[2 * n + 1] = a),
          (t.heap[1] = a++),
          t.pqdownheap(i, 1),
          2 <= t.heap_len;

      );
      (t.heap[--t.heap_max] = t.heap[1]),
        (function (t) {
          for (
            var e,
              n,
              a,
              i,
              r,
              _ = c.dyn_tree,
              o = c.stat_desc.static_tree,
              u = c.stat_desc.extra_bits,
              f = c.stat_desc.extra_base,
              d = c.stat_desc.max_length,
              s = 0,
              l = 0;
            l <= h;
            l++
          )
            t.bl_count[l] = 0;
          for (
            _[2 * t.heap[t.heap_max] + 1] = 0, e = t.heap_max + 1;
            e < p;
            e++
          )
            d < (l = _[2 * _[2 * (n = t.heap[e]) + 1] + 1] + 1) &&
              ((l = d), s++),
              (_[2 * n + 1] = l),
              n > c.max_code ||
                (t.bl_count[l]++,
                (i = 0),
                f <= n && (i = u[n - f]),
                (r = _[2 * n]),
                (t.opt_len += r * (l + i)),
                o && (t.static_len += r * (o[2 * n + 1] + i)));
          if (0 !== s) {
            do {
              for (l = d - 1; 0 === t.bl_count[l]; ) l--;
            } while (
              (t.bl_count[l]--,
              (t.bl_count[l + 1] += 2),
              t.bl_count[d]--,
              0 < (s -= 2))
            );
            for (l = d; 0 !== l; l--)
              for (n = t.bl_count[l]; 0 !== n; )
                (a = t.heap[--e]) > c.max_code ||
                  (_[2 * a + 1] != l &&
                    ((t.opt_len += (l - _[2 * a + 1]) * _[2 * a]),
                    (_[2 * a + 1] = l)),
                  n--);
          }
        })(t),
        u(i, c.max_code, t.bl_count);
    };
  }
  function pt(t, e, n, a, i) {
    var r = this;
    (r.static_tree = t),
      (r.extra_bits = e),
      (r.extra_base = n),
      (r.elems = a),
      (r.max_length = i);
  }
  function t(t, e, n, a, i) {
    var r = this;
    (r.good_length = t),
      (r.max_lazy = e),
      (r.nice_length = n),
      (r.max_chain = a),
      (r.func = i);
  }
  (ht._length_code = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    28,
  ]),
    (ht.base_length = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      10,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      40,
      48,
      56,
      64,
      80,
      96,
      112,
      128,
      160,
      192,
      224,
      0,
    ]),
    (ht.base_dist = [
      0,
      1,
      2,
      3,
      4,
      6,
      8,
      12,
      16,
      24,
      32,
      48,
      64,
      96,
      128,
      192,
      256,
      384,
      512,
      768,
      1024,
      1536,
      2048,
      3072,
      4096,
      6144,
      8192,
      12288,
      16384,
      24576,
    ]),
    (ht.d_code = function (t) {
      return t < 256 ? n[t] : n[256 + (t >>> 7)];
    }),
    (ht.extra_lbits = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0,
    ]),
    (ht.extra_dbits = [
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
    ]),
    (ht.extra_blbits = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      3,
      7,
    ]),
    (ht.bl_order = [
      16,
      17,
      18,
      0,
      8,
      7,
      9,
      6,
      10,
      5,
      11,
      4,
      12,
      3,
      13,
      2,
      14,
      1,
      15,
    ]),
    (pt.static_ltree = [
      12,
      8,
      140,
      8,
      76,
      8,
      204,
      8,
      44,
      8,
      172,
      8,
      108,
      8,
      236,
      8,
      28,
      8,
      156,
      8,
      92,
      8,
      220,
      8,
      60,
      8,
      188,
      8,
      124,
      8,
      252,
      8,
      2,
      8,
      130,
      8,
      66,
      8,
      194,
      8,
      34,
      8,
      162,
      8,
      98,
      8,
      226,
      8,
      18,
      8,
      146,
      8,
      82,
      8,
      210,
      8,
      50,
      8,
      178,
      8,
      114,
      8,
      242,
      8,
      10,
      8,
      138,
      8,
      74,
      8,
      202,
      8,
      42,
      8,
      170,
      8,
      106,
      8,
      234,
      8,
      26,
      8,
      154,
      8,
      90,
      8,
      218,
      8,
      58,
      8,
      186,
      8,
      122,
      8,
      250,
      8,
      6,
      8,
      134,
      8,
      70,
      8,
      198,
      8,
      38,
      8,
      166,
      8,
      102,
      8,
      230,
      8,
      22,
      8,
      150,
      8,
      86,
      8,
      214,
      8,
      54,
      8,
      182,
      8,
      118,
      8,
      246,
      8,
      14,
      8,
      142,
      8,
      78,
      8,
      206,
      8,
      46,
      8,
      174,
      8,
      110,
      8,
      238,
      8,
      30,
      8,
      158,
      8,
      94,
      8,
      222,
      8,
      62,
      8,
      190,
      8,
      126,
      8,
      254,
      8,
      1,
      8,
      129,
      8,
      65,
      8,
      193,
      8,
      33,
      8,
      161,
      8,
      97,
      8,
      225,
      8,
      17,
      8,
      145,
      8,
      81,
      8,
      209,
      8,
      49,
      8,
      177,
      8,
      113,
      8,
      241,
      8,
      9,
      8,
      137,
      8,
      73,
      8,
      201,
      8,
      41,
      8,
      169,
      8,
      105,
      8,
      233,
      8,
      25,
      8,
      153,
      8,
      89,
      8,
      217,
      8,
      57,
      8,
      185,
      8,
      121,
      8,
      249,
      8,
      5,
      8,
      133,
      8,
      69,
      8,
      197,
      8,
      37,
      8,
      165,
      8,
      101,
      8,
      229,
      8,
      21,
      8,
      149,
      8,
      85,
      8,
      213,
      8,
      53,
      8,
      181,
      8,
      117,
      8,
      245,
      8,
      13,
      8,
      141,
      8,
      77,
      8,
      205,
      8,
      45,
      8,
      173,
      8,
      109,
      8,
      237,
      8,
      29,
      8,
      157,
      8,
      93,
      8,
      221,
      8,
      61,
      8,
      189,
      8,
      125,
      8,
      253,
      8,
      19,
      9,
      275,
      9,
      147,
      9,
      403,
      9,
      83,
      9,
      339,
      9,
      211,
      9,
      467,
      9,
      51,
      9,
      307,
      9,
      179,
      9,
      435,
      9,
      115,
      9,
      371,
      9,
      243,
      9,
      499,
      9,
      11,
      9,
      267,
      9,
      139,
      9,
      395,
      9,
      75,
      9,
      331,
      9,
      203,
      9,
      459,
      9,
      43,
      9,
      299,
      9,
      171,
      9,
      427,
      9,
      107,
      9,
      363,
      9,
      235,
      9,
      491,
      9,
      27,
      9,
      283,
      9,
      155,
      9,
      411,
      9,
      91,
      9,
      347,
      9,
      219,
      9,
      475,
      9,
      59,
      9,
      315,
      9,
      187,
      9,
      443,
      9,
      123,
      9,
      379,
      9,
      251,
      9,
      507,
      9,
      7,
      9,
      263,
      9,
      135,
      9,
      391,
      9,
      71,
      9,
      327,
      9,
      199,
      9,
      455,
      9,
      39,
      9,
      295,
      9,
      167,
      9,
      423,
      9,
      103,
      9,
      359,
      9,
      231,
      9,
      487,
      9,
      23,
      9,
      279,
      9,
      151,
      9,
      407,
      9,
      87,
      9,
      343,
      9,
      215,
      9,
      471,
      9,
      55,
      9,
      311,
      9,
      183,
      9,
      439,
      9,
      119,
      9,
      375,
      9,
      247,
      9,
      503,
      9,
      15,
      9,
      271,
      9,
      143,
      9,
      399,
      9,
      79,
      9,
      335,
      9,
      207,
      9,
      463,
      9,
      47,
      9,
      303,
      9,
      175,
      9,
      431,
      9,
      111,
      9,
      367,
      9,
      239,
      9,
      495,
      9,
      31,
      9,
      287,
      9,
      159,
      9,
      415,
      9,
      95,
      9,
      351,
      9,
      223,
      9,
      479,
      9,
      63,
      9,
      319,
      9,
      191,
      9,
      447,
      9,
      127,
      9,
      383,
      9,
      255,
      9,
      511,
      9,
      0,
      7,
      64,
      7,
      32,
      7,
      96,
      7,
      16,
      7,
      80,
      7,
      48,
      7,
      112,
      7,
      8,
      7,
      72,
      7,
      40,
      7,
      104,
      7,
      24,
      7,
      88,
      7,
      56,
      7,
      120,
      7,
      4,
      7,
      68,
      7,
      36,
      7,
      100,
      7,
      20,
      7,
      84,
      7,
      52,
      7,
      116,
      7,
      3,
      8,
      131,
      8,
      67,
      8,
      195,
      8,
      35,
      8,
      163,
      8,
      99,
      8,
      227,
      8,
    ]),
    (pt.static_dtree = [
      0,
      5,
      16,
      5,
      8,
      5,
      24,
      5,
      4,
      5,
      20,
      5,
      12,
      5,
      28,
      5,
      2,
      5,
      18,
      5,
      10,
      5,
      26,
      5,
      6,
      5,
      22,
      5,
      14,
      5,
      30,
      5,
      1,
      5,
      17,
      5,
      9,
      5,
      25,
      5,
      5,
      5,
      21,
      5,
      13,
      5,
      29,
      5,
      3,
      5,
      19,
      5,
      11,
      5,
      27,
      5,
      7,
      5,
      23,
      5,
    ]),
    (pt.static_l_desc = new pt(pt.static_ltree, ht.extra_lbits, 257, 286, h)),
    (pt.static_d_desc = new pt(pt.static_dtree, ht.extra_dbits, 0, 30, h)),
    (pt.static_bl_desc = new pt(null, ht.extra_blbits, 0, 19, 7));
  var a,
    xt = [
      new t(0, 0, 0, 0, 0),
      new t(4, 4, 8, 4, 1),
      new t(4, 5, 16, 8, 1),
      new t(4, 6, 32, 32, 1),
      new t(4, 4, 16, 16, 2),
      new t(8, 16, 32, 32, 2),
      new t(8, 16, 128, 128, 2),
      new t(8, 32, 128, 256, 2),
      new t(32, 128, 258, 1024, 2),
      new t(32, 258, 258, 4096, 2),
    ],
    vt = [
      "need dictionary",
      "stream end",
      "",
      "",
      "stream error",
      "data error",
      "",
      "buffer error",
      "",
      "",
    ],
    bt = 113,
    gt = 666,
    wt = 258,
    mt = 262;
  function yt(t, e, n, a) {
    var i = t[2 * e],
      t = t[2 * n];
    return i < t || (i == t && a[e] <= a[n]);
  }
  function i() {
    var o,
      u,
      f,
      d,
      l,
      s,
      c,
      h,
      i,
      p,
      x,
      v,
      b,
      _,
      g,
      w,
      m,
      y,
      M,
      A,
      U,
      E,
      k,
      z,
      q,
      D,
      I,
      P,
      S,
      L,
      j,
      B,
      C,
      F,
      G,
      H,
      J,
      r,
      K,
      a,
      N,
      O = this,
      Q = new ht(),
      R = new ht(),
      T = new ht();
    function V() {
      for (var t = 0; t < 286; t++) j[2 * t] = 0;
      for (t = 0; t < 30; t++) B[2 * t] = 0;
      for (t = 0; t < 19; t++) C[2 * t] = 0;
      (j[512] = 1), (O.opt_len = O.static_len = 0), (H = r = 0);
    }
    function W(t, e) {
      var n,
        a,
        i = -1,
        r = t[1],
        _ = 0,
        o = 7,
        u = 4;
      for (
        0 === r && ((o = 138), (u = 3)), t[2 * (e + 1) + 1] = 65535, n = 0;
        n <= e;
        n++
      )
        (a = r),
          (r = t[2 * (n + 1) + 1]),
          (++_ < o && a == r) ||
            (_ < u
              ? (C[2 * a] += _)
              : 0 !== a
              ? (a != i && C[2 * a]++, C[32]++)
              : _ <= 10
              ? C[34]++
              : C[36]++,
            (i = a),
            (u =
              (_ = 0) === r
                ? ((o = 138), 3)
                : a == r
                ? ((o = 6), 3)
                : ((o = 7), 4)));
    }
    function X(t) {
      O.pending_buf[O.pending++] = t;
    }
    function Y(t) {
      X(255 & t), X((t >>> 8) & 255);
    }
    function Z(t, e) {
      var n = e;
      16 - n < N
        ? (Y((a |= ((e = t) << N) & 65535)),
          (a = e >>> (16 - N)),
          (N += n - 16))
        : ((a |= (t << N) & 65535), (N += n));
    }
    function $(t, e) {
      t *= 2;
      Z(65535 & e[t], 65535 & e[1 + t]);
    }
    function tt(t, e) {
      var n,
        a,
        i = -1,
        r = t[1],
        _ = 0,
        o = 7,
        u = 4;
      for (0 === r && ((o = 138), (u = 3)), n = 0; n <= e; n++)
        if (((a = r), (r = t[2 * (n + 1) + 1]), !(++_ < o && a == r))) {
          if (_ < u) for (; $(a, C), 0 != --_; );
          else
            0 !== a
              ? (a != i && ($(a, C), _--), $(16, C), Z(_ - 3, 2))
              : _ <= 10
              ? ($(17, C), Z(_ - 3, 3))
              : ($(18, C), Z(_ - 11, 7));
          (i = a),
            (u =
              (_ = 0) === r
                ? ((o = 138), 3)
                : a == r
                ? ((o = 6), 3)
                : ((o = 7), 4));
        }
    }
    function et() {
      16 == N
        ? (Y(a), (N = a = 0))
        : 8 <= N && (X(255 & a), (a >>>= 8), (N -= 8));
    }
    function nt(t, e) {
      var n, a;
      if (
        ((O.pending_buf[J + 2 * H] = (t >>> 8) & 255),
        (O.pending_buf[J + 2 * H + 1] = 255 & t),
        (O.pending_buf[F + H] = 255 & e),
        H++,
        0 === t
          ? j[2 * e]++
          : (r++,
            t--,
            j[2 * (ht._length_code[e] + dt + 1)]++,
            B[2 * ht.d_code(t)]++),
        0 == (8191 & H) && 2 < I)
      ) {
        for (n = 8 * H, t = U - m, a = 0; a < 30; a++)
          n += B[2 * a] * (5 + ht.extra_dbits[a]);
        if (((n >>>= 3), r < Math.floor(H / 2) && n < Math.floor(t / 2)))
          return !0;
      }
      return H == G - 1;
    }
    function at(t, e) {
      var n,
        a,
        i,
        r,
        _ = 0;
      if (0 !== H)
        for (
          ;
          (n =
            ((O.pending_buf[J + 2 * _] << 8) & 65280) |
            (255 & O.pending_buf[J + 2 * _ + 1])),
            (a = 255 & O.pending_buf[F + _]),
            _++,
            0 == n
              ? $(a, t)
              : ($((i = ht._length_code[a]) + dt + 1, t),
                0 !== (r = ht.extra_lbits[i]) && Z((a -= ht.base_length[i]), r),
                $((i = ht.d_code(--n)), e),
                0 !== (r = ht.extra_dbits[i]) && Z((n -= ht.base_dist[i]), r)),
            _ < H;

        );
      $(st, t), (K = t[513]);
    }
    function it() {
      8 < N ? Y(a) : 0 < N && X(255 & a), (N = a = 0);
    }
    function rt(t, e, n) {
      Z(0 + (n ? 1 : 0), 3),
        (n = t),
        (t = e),
        (e = !0),
        it(),
        (K = 8),
        e && (Y(t), Y(~t)),
        O.pending_buf.set(h.subarray(n, n + t), O.pending),
        (O.pending += t);
    }
    function e(t, e, n) {
      var a,
        i,
        r = 0;
      0 < I
        ? (Q.build_tree(O),
          R.build_tree(O),
          (r = (function () {
            var t;
            for (
              W(j, Q.max_code), W(B, R.max_code), T.build_tree(O), t = 18;
              3 <= t && 0 === C[2 * ht.bl_order[t] + 1];
              t--
            );
            return (O.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
          })()),
          (a = (O.opt_len + 3 + 7) >>> 3),
          (i = (O.static_len + 3 + 7) >>> 3) <= a && (a = i))
        : (a = i = e + 5),
        e + 4 <= a && -1 != t
          ? rt(t, e, n)
          : i == a
          ? (Z(2 + (n ? 1 : 0), 3), at(pt.static_ltree, pt.static_dtree))
          : (Z(4 + (n ? 1 : 0), 3),
            (function (t, e, n) {
              var a;
              for (Z(t - 257, 5), Z(e - 1, 5), Z(n - 4, 4), a = 0; a < n; a++)
                Z(C[2 * ht.bl_order[a] + 1], 3);
              tt(j, t - 1), tt(B, e - 1);
            })(Q.max_code + 1, R.max_code + 1, r + 1),
            at(j, B)),
        V(),
        n && it();
    }
    function _t(t) {
      e(0 <= m ? m : -1, U - m, t), (m = U), o.flush_pending();
    }
    function ot() {
      var t, e, n, a;
      do {
        if (0 === (a = i - k - U) && 0 === U && 0 === k) a = l;
        else if (-1 == a) a--;
        else if (l + l - mt <= U) {
          for (
            h.set(h.subarray(l, l + l), 0),
              E -= l,
              U -= l,
              m -= l,
              t = b,
              n = t;
            (e = 65535 & x[--n]), (x[n] = l <= e ? e - l : 0), 0 != --t;

          );
          for (
            t = l, n = t;
            (e = 65535 & p[--n]), (p[n] = l <= e ? e - l : 0), 0 != --t;

          );
          a += l;
        }
        if (0 === o.avail_in) return;
      } while (
        ((t = o.read_buf(h, U + k, a)),
        3 <= (k += t) && (v = (((v = 255 & h[U]) << w) ^ (255 & h[U + 1])) & g),
        k < mt && 0 !== o.avail_in)
      );
    }
    function ut(t) {
      var e,
        n,
        a = q,
        i = U,
        r = z,
        _ = l - mt < U ? U - (l - mt) : 0,
        o = L,
        u = c,
        f = U + wt,
        d = h[i + r - 1],
        s = h[i + r];
      S <= z && (a >>= 2), k < o && (o = k);
      do {
        if (
          h[(e = t) + r] == s &&
          h[e + r - 1] == d &&
          h[e] == h[i] &&
          h[++e] == h[i + 1]
        ) {
          for (
            i += 2, e++;
            h[++i] == h[++e] &&
            h[++i] == h[++e] &&
            h[++i] == h[++e] &&
            h[++i] == h[++e] &&
            h[++i] == h[++e] &&
            h[++i] == h[++e] &&
            h[++i] == h[++e] &&
            h[++i] == h[++e] &&
            i < f;

          );
          if (((n = wt - (f - i)), (i = f - wt), r < n)) {
            if (((E = t), o <= (r = n))) break;
            (d = h[i + r - 1]), (s = h[i + r]);
          }
        }
      } while ((t = 65535 & p[t & u]) > _ && 0 != --a);
      return r <= k ? r : k;
    }
    function ft(t) {
      return (
        (t.total_in = t.total_out = 0),
        (t.msg = null),
        (O.pending = 0),
        (O.pending_out = 0),
        (u = bt),
        (d = 0),
        (Q.dyn_tree = j),
        (Q.stat_desc = pt.static_l_desc),
        (R.dyn_tree = B),
        (R.stat_desc = pt.static_d_desc),
        (T.dyn_tree = C),
        (T.stat_desc = pt.static_bl_desc),
        (N = a = 0),
        (K = 8),
        V(),
        (function () {
          var t;
          for (i = 2 * l, t = x[b - 1] = 0; t < b - 1; t++) x[t] = 0;
          (D = xt[I].max_lazy),
            (S = xt[I].good_length),
            (L = xt[I].nice_length),
            (q = xt[I].max_chain),
            (y = z = 2),
            (v = A = k = m = U = 0);
        })(),
        0
      );
    }
    (O.depth = []),
      (O.bl_count = []),
      (O.heap = []),
      (j = []),
      (B = []),
      (C = []),
      (O.pqdownheap = function (t, e) {
        for (
          var n = O.heap, a = n[e], i = e << 1;
          i <= O.heap_len &&
          (i < O.heap_len && yt(t, n[i + 1], n[i], O.depth) && i++,
          !yt(t, a, n[i], O.depth));

        )
          (n[e] = n[i]), (e = i), (i <<= 1);
        n[e] = a;
      }),
      (O.deflateInit = function (t, e, n, a, i, r) {
        return (
          (a = a || 8),
          (i = i || 8),
          (r = r || 0),
          (t.msg = null),
          -1 == e && (e = 6),
          i < 1 ||
          9 < i ||
          8 != a ||
          n < 9 ||
          15 < n ||
          e < 0 ||
          9 < e ||
          r < 0 ||
          2 < r
            ? lt
            : ((t.dstate = O),
              (c = (l = 1 << (s = n)) - 1),
              (g = (b = 1 << (_ = i + 7)) - 1),
              (w = Math.floor((_ + 3 - 1) / 3)),
              (h = new Uint8Array(2 * l)),
              (p = []),
              (x = []),
              (G = 1 << (i + 6)),
              (O.pending_buf = new Uint8Array(4 * G)),
              (f = 4 * G),
              (J = Math.floor(G / 2)),
              (F = 3 * G),
              (I = e),
              (P = r),
              ft(t))
        );
      }),
      (O.deflateEnd = function () {
        return 42 != u && u != bt && u != gt
          ? lt
          : ((O.pending_buf = null),
            (h = p = x = null),
            (O.dstate = null),
            u == bt ? -3 : 0);
      }),
      (O.deflateParams = function (t, e, n) {
        var a = 0;
        return (
          -1 == e && (e = 6),
          e < 0 || 9 < e || n < 0 || 2 < n
            ? lt
            : (xt[I].func != xt[e].func &&
                0 !== t.total_in &&
                (a = t.deflate(1)),
              I != e &&
                ((D = xt[(I = e)].max_lazy),
                (S = xt[I].good_length),
                (L = xt[I].nice_length),
                (q = xt[I].max_chain)),
              (P = n),
              a)
        );
      }),
      (O.deflateSetDictionary = function (t, e, n) {
        var a,
          i = n,
          r = 0;
        if (!e || 42 != u) return lt;
        if (i < 3) return 0;
        for (
          l - mt < i && (r = n - (i = l - mt)),
            h.set(e.subarray(r, r + i), 0),
            m = U = i,
            v = (((v = 255 & h[0]) << w) ^ (255 & h[1])) & g,
            a = 0;
          a <= i - 3;
          a++
        )
          (v = ((v << w) ^ (255 & h[a + 2])) & g),
            (p[a & c] = x[v]),
            (x[v] = a);
        return 0;
      }),
      (O.deflate = function (t, e) {
        var n, a, i, r, _;
        if (4 < e || e < 0) return lt;
        if (
          !t.next_out ||
          (!t.next_in && 0 !== t.avail_in) ||
          (u == gt && 4 != e)
        )
          return (t.msg = vt[4]), lt;
        if (0 === t.avail_out) return (t.msg = vt[7]), ct;
        if (
          ((o = t),
          (i = d),
          (d = e),
          42 == u &&
            ((_ = (8 + ((s - 8) << 4)) << 8),
            3 < (a = ((I - 1) & 255) >> 1) && (a = 3),
            (_ |= a << 6),
            0 !== U && (_ |= 32),
            (u = bt),
            X(((_ = _ += 31 - (_ % 31)) >> 8) & 255),
            X(255 & _)),
          0 !== O.pending)
        ) {
          if ((o.flush_pending(), 0 === o.avail_out)) return (d = -1), 0;
        } else if (0 === o.avail_in && e <= i && 4 != e)
          return (o.msg = vt[7]), ct;
        if (u == gt && 0 !== o.avail_in) return (t.msg = vt[7]), ct;
        if (0 !== o.avail_in || 0 !== k || (0 != e && u != gt)) {
          switch (((r = -1), xt[I].func)) {
            case 0:
              r = (function (t) {
                var e,
                  n = 65535;
                for (f - 5 < n && (n = f - 5); ; ) {
                  if (k <= 1) {
                    if ((ot(), 0 === k && 0 == t)) return 0;
                    if (0 === k) break;
                  }
                  if (
                    ((U += k),
                    (k = 0),
                    (e = m + n),
                    (0 === U || e <= U) &&
                      ((k = U - e), (U = e), _t(!1), 0 === o.avail_out))
                  )
                    return 0;
                  if (l - mt <= U - m && (_t(!1), 0 === o.avail_out)) return 0;
                }
                return (
                  _t(4 == t),
                  0 === o.avail_out ? (4 == t ? 2 : 0) : 4 == t ? 3 : 1
                );
              })(e);
              break;
            case 1:
              r = (function (t) {
                for (var e, n = 0; ; ) {
                  if (k < mt) {
                    if ((ot(), k < mt && 0 == t)) return 0;
                    if (0 === k) break;
                  }
                  if (
                    (3 <= k &&
                      ((v = ((v << w) ^ (255 & h[U + 2])) & g),
                      (n = 65535 & x[v]),
                      (p[U & c] = x[v]),
                      (x[v] = U)),
                    0 !== n &&
                      ((U - n) & 65535) <= l - mt &&
                      2 != P &&
                      (y = ut(n)),
                    3 <= y)
                  )
                    if (((e = nt(U - E, y - 3)), (k -= y), y <= D && 3 <= k)) {
                      for (
                        y--;
                        (v = ((v << w) ^ (255 & h[++U + 2])) & g),
                          (n = 65535 & x[v]),
                          (p[U & c] = x[v]),
                          (x[v] = U),
                          0 != --y;

                      );
                      U++;
                    } else
                      (U += y),
                        (y = 0),
                        (v = (((v = 255 & h[U]) << w) ^ (255 & h[U + 1])) & g);
                  else (e = nt(0, 255 & h[U])), k--, U++;
                  if (e && (_t(!1), 0 === o.avail_out)) return 0;
                }
                return (
                  _t(4 == t),
                  0 === o.avail_out ? (4 == t ? 2 : 0) : 4 == t ? 3 : 1
                );
              })(e);
              break;
            case 2:
              r = (function (t) {
                for (var e, n, a = 0; ; ) {
                  if (k < mt) {
                    if ((ot(), k < mt && 0 == t)) return 0;
                    if (0 === k) break;
                  }
                  if (
                    (3 <= k &&
                      ((v = ((v << w) ^ (255 & h[U + 2])) & g),
                      (a = 65535 & x[v]),
                      (p[U & c] = x[v]),
                      (x[v] = U)),
                    (z = y),
                    (M = E),
                    (y = 2),
                    0 !== a &&
                      z < D &&
                      ((U - a) & 65535) <= l - mt &&
                      (2 != P && (y = ut(a)),
                      y <= 5 &&
                        (1 == P || (3 == y && 4096 < U - E)) &&
                        (y = 2)),
                    3 <= z && y <= z)
                  ) {
                    for (
                      n = U + k - 3,
                        e = nt(U - 1 - M, z - 3),
                        k -= z - 1,
                        z -= 2;
                      ++U <= n &&
                        ((v = ((v << w) ^ (255 & h[U + 2])) & g),
                        (a = 65535 & x[v]),
                        (p[U & c] = x[v]),
                        (x[v] = U)),
                        0 != --z;

                    );
                    if (
                      ((A = 0), (y = 2), U++, e && (_t(!1), 0 === o.avail_out))
                    )
                      return 0;
                  } else if (0 !== A) {
                    if (
                      ((e = nt(0, 255 & h[U - 1])) && _t(!1),
                      U++,
                      k--,
                      0 === o.avail_out)
                    )
                      return 0;
                  } else (A = 1), U++, k--;
                }
                return (
                  0 !== A && ((e = nt(0, 255 & h[U - 1])), (A = 0)),
                  _t(4 == t),
                  0 === o.avail_out ? (4 == t ? 2 : 0) : 4 == t ? 3 : 1
                );
              })(e);
          }
          if (((2 != r && 3 != r) || (u = gt), 0 == r || 2 == r))
            return 0 === o.avail_out && (d = -1), 0;
          if (1 == r) {
            if (1 == e)
              Z(2, 3),
                $(st, pt.static_ltree),
                et(),
                1 + K + 10 - N < 9 && (Z(2, 3), $(st, pt.static_ltree), et()),
                (K = 7);
            else if ((rt(0, 0, !1), 3 == e)) for (n = 0; n < b; n++) x[n] = 0;
            if ((o.flush_pending(), 0 === o.avail_out)) return (d = -1), 0;
          }
        }
        return 4 != e ? 0 : 1;
      });
  }
  function r() {
    var t = this;
    (t.next_in_index = 0),
      (t.next_out_index = 0),
      (t.avail_in = 0),
      (t.total_in = 0),
      (t.avail_out = 0),
      (t.total_out = 0);
  }
  function _(t) {
    var o = new r(),
      u = new Uint8Array(512);
    void 0 === t && (t = -1),
      o.deflateInit(t),
      (o.next_out = u),
      (this.append = function (t, e) {
        var n,
          a = [],
          i = 0,
          r = 0,
          _ = 0;
        if (t.length) {
          (o.next_in_index = 0), (o.next_in = t), (o.avail_in = t.length);
          do {
            if (
              ((o.next_out_index = 0), (o.avail_out = 512), 0 != o.deflate(0))
            )
              throw "deflating: " + o.msg;
          } while (
            (o.next_out_index &&
              (512 == o.next_out_index
                ? a.push(new Uint8Array(u))
                : a.push(new Uint8Array(u.subarray(0, o.next_out_index)))),
            (_ += o.next_out_index),
            e &&
              0 < o.next_in_index &&
              o.next_in_index != i &&
              (e(o.next_in_index), (i = o.next_in_index)),
            0 < o.avail_in || 0 === o.avail_out)
          );
          return (
            (n = new Uint8Array(_)),
            a.forEach(function (t) {
              n.set(t, r), (r += t.length);
            }),
            n
          );
        }
      }),
      (this.flush = function () {
        var t,
          e,
          n = [],
          a = 0,
          i = 0;
        do {
          if (
            ((o.next_out_index = 0),
            (o.avail_out = 512),
            1 != (t = o.deflate(4)) && 0 != t)
          )
            throw "deflating: " + o.msg;
        } while (
          (0 < 512 - o.avail_out &&
            n.push(new Uint8Array(u.subarray(0, o.next_out_index))),
          (i += o.next_out_index),
          0 < o.avail_in || 0 === o.avail_out)
        );
        return (
          o.deflateEnd(),
          (e = new Uint8Array(i)),
          n.forEach(function (t) {
            e.set(t, a), (a += t.length);
          }),
          e
        );
      });
  }
  (r.prototype = {
    deflateInit: function (t, e) {
      return (
        (this.dstate = new i()),
        (e = e || h),
        this.dstate.deflateInit(this, t, e)
      );
    },
    deflate: function (t) {
      return this.dstate ? this.dstate.deflate(this, t) : lt;
    },
    deflateEnd: function () {
      if (!this.dstate) return lt;
      var t = this.dstate.deflateEnd();
      return (this.dstate = null), t;
    },
    deflateParams: function (t, e) {
      return this.dstate ? this.dstate.deflateParams(this, t, e) : lt;
    },
    deflateSetDictionary: function (t, e) {
      return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : lt;
    },
    read_buf: function (t, e, n) {
      var a = this,
        i = a.avail_in;
      return (
        n < i && (i = n),
        0 === i
          ? 0
          : ((a.avail_in -= i),
            t.set(a.next_in.subarray(a.next_in_index, a.next_in_index + i), e),
            (a.next_in_index += i),
            (a.total_in += i),
            i)
      );
    },
    flush_pending: function () {
      var t = this,
        e = t.dstate.pending;
      e > t.avail_out && (e = t.avail_out),
        0 !== e &&
          (t.next_out.set(
            t.dstate.pending_buf.subarray(
              t.dstate.pending_out,
              t.dstate.pending_out + e
            ),
            t.next_out_index
          ),
          (t.next_out_index += e),
          (t.dstate.pending_out += e),
          (t.total_out += e),
          (t.avail_out -= e),
          (t.dstate.pending -= e),
          0 === t.dstate.pending && (t.dstate.pending_out = 0));
    },
  }),
    e.zip
      ? (e.zip.Deflater = _)
      : ((a = new _()),
        e.addEventListener(
          "message",
          function (t) {
            t = t.data;
            t.init && ((a = new _(t.level)), e.postMessage({ oninit: !0 })),
              t.append &&
                e.postMessage({
                  onappend: !0,
                  data: a.append(t.data, function (t) {
                    e.postMessage({ progress: !0, current: t });
                  }),
                }),
              t.flush && e.postMessage({ onflush: !0, data: a.flush() });
          },
          !1
        ));
})(this);
